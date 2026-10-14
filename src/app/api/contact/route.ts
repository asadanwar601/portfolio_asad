import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactRequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();
    const { name, email, subject, message } = body;

    // Strict validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter a valid name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || subject.trim().length < 3) {
      return NextResponse.json(
        { error: "Please enter a subject (minimum 3 characters)." },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a message with at least 10 characters." },
        { status: 400 }
      );
    }

    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedSubject = subject.trim();
    const sanitizedMessage = message.trim();

    // Target recipient: asadanwar601@gmail.com
    const recipientEmail =
      process.env.CONTACT_RECIPIENT_EMAIL || "asadanwar601@gmail.com";

    // SMTP Credentials
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpSecure = process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE === "true"
      : smtpPort === 465;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;

    // If SMTP credentials are provided, attempt live dispatch via nodemailer
    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpSecure,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const formattedDate = new Date().toLocaleString("en-US", {
          timeZone: "Asia/Kolkata",
          dateStyle: "full",
          timeStyle: "medium",
        });

        const mailOptions = {
          // Send with submitter's name in From, using authenticated SMTP user
          from: `"${sanitizedName}" <${smtpUser}>`,
          // Direct reply-to is set to the submitter's email address
          replyTo: `"${sanitizedName}" <${sanitizedEmail}>`,
          to: recipientEmail,
          subject: `[Portfolio Inquiry] ${sanitizedSubject} - from ${sanitizedName}`,
          text: `You received a new inquiry from your portfolio website:

From: ${sanitizedName} (${sanitizedEmail})
Subject: ${sanitizedSubject}
Date: ${formattedDate} (IST)

--------------------------------------------------
Message:
${sanitizedMessage}
--------------------------------------------------

* Replying to this email will reply directly to ${sanitizedEmail}.`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1e293b;">
              <div style="border-bottom: 2px solid #2563eb; padding-bottom: 16px; margin-bottom: 20px;">
                <span style="display: inline-block; padding: 4px 10px; background-color: #eff6ff; color: #1d4ed8; font-size: 12px; font-weight: 600; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">
                  New Portfolio Inquiry
                </span>
                <h1 style="margin: 0; font-size: 20px; color: #0f172a; font-weight: 700;">
                  ${sanitizedSubject}
                </h1>
              </div>

              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                  <tr>
                    <td style="padding: 6px 0; color: #64748b; width: 100px; font-weight: 500;">Sender:</td>
                    <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${sanitizedName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #64748b; font-weight: 500;">Email:</td>
                    <td style="padding: 6px 0;">
                      <a href="mailto:${sanitizedEmail}" style="color: #2563eb; text-decoration: none; font-weight: 600;">
                        ${sanitizedEmail}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #64748b; font-weight: 500;">Received:</td>
                    <td style="padding: 6px 0; color: #334155;">${formattedDate} IST</td>
                  </tr>
                </table>
              </div>

              <div style="margin-bottom: 28px;">
                <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin: 0 0 10px 0;">
                  Message Body
                </h2>
                <div style="background-color: #ffffff; border-left: 3px solid #2563eb; padding: 16px; margin: 0; color: #1e293b; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${sanitizedMessage}</div>
              </div>

              <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 12px; color: #94a3b8;">
                Direct reply-to is set to: <strong style="color: #0f172a;">${sanitizedEmail}</strong>. Clicking Reply in your email client will reply straight to ${sanitizedName}.
              </div>
            </div>
          `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("[SMTP Success] Message dispatched via nodemailer:", info.messageId);

        return NextResponse.json({
          success: true,
          delivered: true,
          message:
            "Thank you for reaching out! Your message was sent successfully to Asad Anwar.",
        });
      } catch (smtpErr) {
        console.error("[SMTP Dispatch Error]:", smtpErr);
        return NextResponse.json({
          success: true,
          delivered: false,
          requiresDirectEmail: true,
          message:
            "Your message was received, but SMTP authentication failed. You can dispatch your message directly with one click below.",
        });
      }
    }

    // Fallback when SMTP_PASS or SMTP_USER is not yet populated
    console.log("[Contact Submission Received (SMTP Unconfigured)]:", {
      name: sanitizedName,
      email: sanitizedEmail,
      subject: sanitizedSubject,
      messageLength: sanitizedMessage.length,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      delivered: false,
      requiresDirectEmail: true,
      message:
        "Your message was captured! To enable automatic SMTP email delivery, configure your Gmail App Password in SMTP_PASS in .env.local. In the meantime, you can click below to dispatch immediately via your email client.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your message." },
      { status: 500 }
    );
  }
}
