import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
    folder_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Folder',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    content_date: {
        type: Date,
        default: Date.now
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Content = mongoose.model('Content', contentSchema);

export default Content;