import Contact from "../data/createContactTable.js";

export const createContactService = async (contactData) => {
      try {
    const newContact = new Contact(contactData);
    await newContact.save();
    return newContact;
  } catch (error) {
    throw error;
  }
}