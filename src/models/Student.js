import mongoose from 'mongoose';

const { Schema } = mongoose;

/* Add more if required */
const StudentSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
      },
    GardianCNIC: String,
    
})

const Student = mongoose.model('Student', StudentSchema);

export default Student;
