import Category from '../data/createCategoryTable.js';

export const createCategoryService = async (categoryName) => {
    try {
        const newCategory = new Category({
            category_name: categoryName
        });
        const savedCategory = await newCategory.save();
        return savedCategory;
    } catch (error) {
        throw error;
    }
}

export const getAllCategoryServices = async () => {
    try {
        const categories = await Category.find();
        return categories;
    } catch (error) {
        throw error;
    }
}

export const getCategoryByIdService = async (id) => {
    try {
        const category = await Category.findById(id);
        return category;
    } catch (error) {
        throw error;
    }
}

export const updateCategoryService = async (id, categoryName) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            id,
            { category_name: categoryName },
            { new: true }
        );
        return updatedCategory;
    } catch (error) {
        throw error;
    }
}

export const deleteCategoryService = async (id) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(id);
        return deletedCategory;
    } catch (error) {
        throw error;
    }
}