import mongoose from 'mongoose';
import UserRoles from '../common/UserRoles' 

const { Schema } = mongoose;

/* Add more if required */
const CourseSchema = new Schema({
    name: String,
    description: String,
    content: String,
    classStandard: String

})

const Course = mongoose.model('Course', CourseSchema);

export default Course;
