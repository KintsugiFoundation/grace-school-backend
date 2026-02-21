import Folder from '../data/createFolderTable.js';

export const createFolderService = async (folderName) => {
    try {
        const newFolder = new Folder({
            folder_name: folderName
        });
        const savedFolder = await newFolder.save();
        return savedFolder;
    } catch (error) {
        throw error;
    }
}

export const getAllFoldersService = async () => {
    try {
        const folders = await Folder.find();
        return folders;
    } catch (error) {
        throw error;
    }
}

export const getFolderByIdService = async (id) => {
    try {
        const folder = await Folder.findById(id);
        return folder;
    } catch (error) {
        throw error;
    }
}

export const updateFolderService = async (id, folderName) => {
    try {
        const updatedFolder = await Folder.findByIdAndUpdate(
            id,
            { folder_name: folderName },
            { new: true }
        );
        return updatedFolder;
    } catch (error) {
        throw error;
    }
}

export const deleteFolderService = async (id) => {
    try {
        const deletedFolder = await Folder.findByIdAndDelete(id);
        return deletedFolder;
    } catch (error) {
        throw error;
    }
}