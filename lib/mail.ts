import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "mail@gore-itishniki.online",
    to: email,
    subject: "2FA verification",
    html: `<p>Your 2FA code is ${token}</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/new-verification?token=${token}`;

  await resend.emails.send({
    from: "mail@gore-itishniki.online",
    to: email,
    subject: "Confirm email",
    html: `<p>Click <a href=${confirmLink}>here</a> to confirm email</p>`,
  });
};

export const sendPasswordResetToken = async (email: string, token: string) => {
  const resetLink = `${domain}/new-password?token=${token}`;

  await resend.emails.send({
    from: "mail@gore-itishniki.online",
    to: email,
    subject: "Reset password",
    html: `<p>Click <a href=${resetLink}>here</a> to reset password</p>`,
  });
};
