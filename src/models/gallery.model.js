import Gallery from '../data/createGalleryTable.js';
import Category from '../data/createCategoryTable.js';

export const createGalleryService = async (categoryId, gallery) => {
    try {
        const newGallery = new Gallery({
            category_id: categoryId,
            gallery: gallery
        });
        const savedGallery = await newGallery.save();
        return savedGallery;
    } catch (error) {
        throw error;
    }
}

export const getAllGalleriesService = async () => {
    try {
        const galleries = await Gallery.find().populate('category_id');
        return galleries;
    } catch (error) {
        throw error;
    }
}

export const getGalleryByIdService = async (id) => {
    try {
        const gallery = await Gallery.findById(id).populate('category_id');
        return gallery;
    } catch (error) {
        throw error;
    }
}

export const getAllCategoriesWithGalleriesService = async () => {
    try {
        const categories = await Category.find();
        const result = await Promise.all(
            categories.map(async (category) => {
                const galleries = await Gallery.find({ category_id: category._id });
                return {
                    _id: category._id,
                    category_name: category.category_name,
                    galleries: galleries.map(g => ({
                        _id: g._id,
                        gallery_path: g.gallery
                    }))
                };
            })
        );
        return result;
    } catch (error) {
        throw error;
    }
}

export const updateGalleryService = async (categoryId, gallery, galleryId) => {
    try {
        const updatedGallery = await Gallery.findByIdAndUpdate(
            galleryId,
            {
                category_id: categoryId,
                gallery: gallery
            },
            { new: true }
        );
        return updatedGallery;
    } catch (error) {
        throw error;
    }
}

export const deleteGalleryService = async (id) => {
    try {
        const deletedGallery = await Gallery.findByIdAndDelete(id);
        return deletedGallery;
    } catch (error) {
        throw error;
    }
}