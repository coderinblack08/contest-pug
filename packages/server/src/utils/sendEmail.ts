import nodemailer from 'nodemailer';

export const sendEmail = async (to: string, subject: string, text: string) => {
  // const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: 'd7mgztz2ubhzv4di@ethereal.email',
      pass: 'dzAn5DXJurB2DrNr6C',
    },
  });

  const info = await transporter.sendMail({
    from: 'Coderinblack',
    to: to,
    subject: subject,
    html: text,
  });

  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
};
