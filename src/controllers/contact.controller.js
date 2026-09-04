import { createContactService } from "../models/contact.model.js";
import transporter from "../configs/mailer.js";
import handleResponse from "../utils/handleResponse.js";

export const createContactController = async (req, res, next) => {
  try {
    const newContact = await createContactService(req.body); 

    try {
    await transporter.sendMail({
      from: `"Grace School" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'Grace School Contact Form Submission',
      html:`
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${newContact.name}</p>
      <p><strong>Phone:</strong> ${newContact.phone}</p>
      <p><strong>Email:</strong> ${newContact.email}</p>
      <p><strong>Message:</strong> ${newContact.message}</p>
      <p><strong>Submitted At:</strong> ${newContact.createdAt}</p>
      `,
    });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }
    
   return handleResponse(res, 201, 'Message sent successfully', newContact);
    } catch (error) {
    next(error);
  }
  };import { createContactService } from "../models/contact.model.js";
import transporter from "../configs/mailer.js";
import handleResponse from "../utils/handleResponse.js";

export const createContactController = async (req, res, next) => {
  try {
    const { name, email, message, phone } = req.body;
    
    // Grace School Basic validation
    if (!name?.trim()) {
      return handleResponse(res, 400, 'Name is required');
    }
    
    if (!email?.trim() || !email?.includes('@')) {
      return handleResponse(res, 400, 'Valid email is required');
    }
    
    if (!message?.trim()) {
      return handleResponse(res, 400, 'Message is required');
    }

    const newContact = await createContactService(req.body); 

    // Grace School Send email 
    try {
      await transporter.sendMail({
        from: `"Grace School" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
        `,
        // Grace School Add plain text fallback
        text: `
          New Contact Form Submission
          Name: ${name}
          Email: ${email}
          Phone: ${phone || 'Not provided'}
          Message: ${message}
          Submitted At: ${new Date().toLocaleString()}
        `,
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Don't return error - contact is already saved
    }
    
    return handleResponse(res, 201, 'Message sent successfully', newContact);
  } catch (error) {
    next(error);
  }
};