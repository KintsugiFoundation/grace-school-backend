import User from '../data/createUsersTable.js';

export const getAllUsersService = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw error;
    }
}

export const getUserByIdService = async (id) => {
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        throw error;
    }
}

export const getUserByEmailService = async (email) => {
    try {
        const user = await User.findOne({ user_email: email });
        return user;
    } catch (error) {
        throw error;
    }
}

export const createUserService = async (username, email, password) => {
    try {
        const newUser = new User({
            user_name: username,
            user_email: email,
            user_password: password
        });
        const savedUser = await newUser.save();
        return savedUser;
    } catch (error) {
        throw error;
    }
}

export const loginUserService = async (email, password) => {
    try {
        const user = await User.findOne({ user_email: email });
        return user;
    } catch (error) {
        throw error;
    }
}

export const updateUserService = async (id, name, email) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { user_name: name, user_email: email },
            { new: true }
        );
        return updatedUser;
    } catch (error) {
        throw error;
    }
}

export const deleteUserService = async (id) => {
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        return deletedUser;
    } catch (error) {
        throw error;
    }
}