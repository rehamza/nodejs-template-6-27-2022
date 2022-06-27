import mongoose from 'mongoose';

const { Schema } = mongoose;

/* Add more if required */
const TutorSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
      },
    fatherName: String,
    phoneNo: String,
    fatherCNIC: Number,
    dateOfBirth: String,
    gender: {
        type: String,
        enum: [
            'Male',
            'Female',
            'Other'
        ]
    },
    permanentAddress: String,
    city: String,
    qualification: {
        type: String,
        enum: [
            'Intermediate',
            'Undergraduate',
            'Graduate',
            'Masters',
            'Phd'
        ]
    },
    uploadDoc: {
        data: Buffer,
        contentType: String
    },
    CNICFront: {
        data: Buffer,
        contentType: String
    },
    CNICBack: {
        data: Buffer,
        contentType: String
    },
    fatherCNICFront: {
        data: Buffer,
        contentType: String
    },
    fatherCNICBack: {
        data: Buffer,
        contentType: String
    },
    profilePic: {
        data: Buffer,
        contentType: String
      },
    
})

const Tutor = mongoose.model('Tutor', TutorSchema);

export default Tutor;
