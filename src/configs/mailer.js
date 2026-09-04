// config/mailer.js
import { ClientSecretCredential } from '@azure/identity';
import dotenv from 'dotenv';

dotenv.config();

const {
  MICROSOFT_TENANT_ID,
  MICROSOFT_CLIENT_ID,
  MICROSOFT_CLIENT_SECRET,
  SENDER_AUTH_EMAIL,
  SENDER_EMAIL,
} = process.env;

// Microsoft OAuth 2.0 credentials
const credential = new ClientSecretCredential(
  MICROSOFT_TENANT_ID,
  MICROSOFT_CLIENT_ID,
  MICROSOFT_CLIENT_SECRET
);

// Get access token
const getAccessToken = async () => {
  const tokenResponse = await credential.getToken(
    'https://graph.microsoft.com/.default'
  );

  if (!tokenResponse?.token) {
    throw new Error('Unable to obtain Microsoft Graph access token');
  }

  return tokenResponse.token;
};

// Send email using Microsoft Graph
const sendMail = async ({ to, subject, html, text }) => {
  try {
    const accessToken = await getAccessToken();

    const message = {
      subject,
      body: {
        contentType: 'HTML',
        content: html || text || '',
      },
      toRecipients: [
        {
          emailAddress: {
            address: to,
          },
        },
      ],
      from: {
        emailAddress: {
          name: 'Grace School',
          address: SENDER_EMAIL,
        },
      },
    };

    const response = await fetch(
      `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(
        SENDER_AUTH_EMAIL
      )}/sendMail`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          saveToSentItems: true,
        }),
      }
    );

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Microsoft Graph Error:', response.status, errorBody);
      throw new Error(`Microsoft Graph email failed: ${response.status}`);
    }

    console.log(`Email sent to ${to}`);
    return { success: true };
  } catch (error) {
    console.error('Microsoft Graph Email Error:', error.message);
    throw error;
  }
};

export default { sendMail };