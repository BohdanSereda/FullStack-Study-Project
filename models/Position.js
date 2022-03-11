import mongoose from 'mongoose';

const Position = mongoose.Schema({
    name:{type: String, required: true},
    cost:{type: Number, required: true},
    category:{type: ObjectId, ref:'Category', required: true},
    user:{type: ObjectId, ref: 'User', required: true}
})

export default mongoose.model('Position', Position)