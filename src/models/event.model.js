import Event from '../data/createEventTable.js';

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

export const getAllEventService = async () => {
    try {
        const events = await Event.find();
        return events;
    } catch (error) {
        throw error;
    }
}

export const getEventByIdService = async (id) => {
    try {
        const event = await Event.findById(id);
        return event;
    } catch (error) {
        throw error;
    }
}

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

export const deleteEventService = async (id) => {
    try {
        const deletedEvent = await Event.findByIdAndDelete(id);
        return deletedEvent;
    } catch (error) {
        throw error;
    }
}