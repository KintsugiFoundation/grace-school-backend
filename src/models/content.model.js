import Content from "../data/createContentTable.js";

export const createContentService = async (folderId, content) => {
    try {
        const newContent = new Content({
            folder_id: folderId,
            content: content
        });
        const savedContent = await newContent.save();
        return savedContent;
    } catch (error) {
        throw error;
    }
}

export const getAllContentService = async () => {
    try {
        const contents = await Content.find().populate('folder_id');
        return contents;
    } catch (error) {
        throw error;
    }
}

export const getContentByFolderService = async (folderId) => {
    try {
        const contents = await Content.find({ folder_id: folderId }).populate('folder_id');
        return contents;
    } catch (error) {
        throw error;
    }
}

export const getContentByIdService = async (id) => {
    try {
        const content = await Content.findById(id).populate('folder_id');
        return content;
    } catch (error) {
        throw error;
    }
}

export const updateContentService = async (id, folderId, content) => {
    try {
        const updatedContent = await Content.findByIdAndUpdate(
            id,
            {
                folder_id: folderId,
                content: content
            },
            { new: true }
        );
        return updatedContent;
    } catch (error) {
        throw error;
    }
}

export const deleteContentService = async (id) => {
    try {
        const deletedContent = await Content.findByIdAndDelete(id);
        return deletedContent;
    } catch (error) {
        throw error;
    }
}