import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    event_name: {
        type: String,
        required: true
    },
    event_type: {
        type: String,
        required: true
    },
    event_startDate: {
        type: String,
        required: true
    },
    event_endDate: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Event = mongoose.model('Event', eventSchema);

export default Event;