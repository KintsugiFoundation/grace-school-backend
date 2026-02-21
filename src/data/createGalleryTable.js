import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema({
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    gallery: {
        type: String,
        required: true
    },
    gallery_date: {
        type: Date,
        default: Date.now
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Gallery = mongoose.model('Gallery', gallerySchema);

export default Gallery;