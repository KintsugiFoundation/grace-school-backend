import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import connectDB from '../configs/db.js';
import User from './createUsersTable.js';

dotenv.config();

const seedUser = async () => {
    try {
        // Connect to MongoDB
        await connectDB();

        // Check if user already exists
        const existingUser = await User.findOne({ user_email: 'aidoomusah18ab0614@gmail.com' });
        
        if (existingUser) {
            console.log('User already exists!');
            process.exit(0);
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash('12345678', 10);

        // Create the user
        const newUser = new User({
            user_name: 'Admin User',
            user_email: 'aidoomusah18ab0614@gmail.com',
            user_password: hashedPassword,
            user_role: 'admin'
        });

        await newUser.save();
        console.log('User seeded successfully!');
        console.log('Email: aidoomusah18ab0614@gmail.com');
        console.log('Password: 12345678');
        
        process.exit(0);
    } catch (error) {
        console.error('Error seeding user:', error);
        process.exit(1);
    }
};

seedUser();
