/**
 * event.model.js
 */
import Event from '../data/createEventTable.js';
/** Creates and saves a new event to the database */
export const createEventService = async (eventName, eventType, eventStartDate, eventEndDate) => {
    try {
        const newEvent = new Event({
            event_name: eventName,
            event_type: eventType,
            event_startDate: eventStartDate,
            event_endDate: eventEndDate
        });
        const savedEvent = await newEvent.save();
        return savedEvent;
    } catch (error) {
        throw error;
    }
}
/** Retrieves all events from the database */
export const getAllEventService = async () => {
    try {
        const events = await Event.find();
        return events;
    } catch (error) {
        throw error;
    }
}
/** Retrieves an event by ID */
export const getEventByIdService = async (id) => {
    try {
        const event = await Event.findById(id);
        return event;
    } catch (error) {
        throw error;
    }
}
/** Updates an event by ID and returns the updated document */
export const updateEventService = async (id, eventName, eventType, eventStartDate, eventEndDate) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            id,
            {
                event_name: eventName,
                event_type: eventType,
                event_startDate: eventStartDate,
                event_endDate: eventEndDate
            },
            { new: true }
        );
        return updatedEvent;
    } catch (error) {
        throw error;
    }
}
/** Deletes an event by ID and returns the deleted document */
export const deleteEventService = async (id) => {
    try {
        const deletedEvent = await Event.findByIdAndDelete(id);
        return deletedEvent;
    } catch (error) {
        throw error;
    }
}