// pages/api/sendEmail.js
import { NextApiRequest, NextApiResponse } from 'next';
import SibApiV3Sdk from 'sib-api-v3-sdk';

export default async function handler(req, res) {
  SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.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

  const { email, subject, message } = req.body;

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  const sendSmtpEmail = {
    to: [{ email: email }],
    sender: { email: 'your_email@example.com' },  // Замените на ваш email
    subject: subject,
    htmlContent: `<html><body><p>${message}</p></body></html>`,
  };

  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail);
    res.status(200).json({ message: 'Email отправлен успешно!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при отправке письма', error });
  }
}
