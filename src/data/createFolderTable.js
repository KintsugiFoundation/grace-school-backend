import mongoose from 'mongoose';

const folderSchema = new mongoose.Schema({
    folder_name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Folder = mongoose.model('Folder', folderSchema);

export default Folder;