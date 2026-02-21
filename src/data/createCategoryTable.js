import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Category = mongoose.model('Category', categorySchema);

export default Category;