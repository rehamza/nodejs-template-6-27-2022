import mongoose from 'mongoose';
import {UserRoles} from '../common/UserRoles' 

const { Schema } = mongoose;

/* Add more if required */
const UserSchema = new Schema({
    email: { type: String, unique: true, required: true },
    firstName: String,
    lastName: String,
    password: {
        type: String,
        default: null
    },
    CNIC: String,
    role: {
        type: String,
        enum: UserRoles
    },
    terms: {
        type:Boolean,
        required: true
    }
    
})

const User = mongoose.model('User', UserSchema);

export default User;
