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
  };