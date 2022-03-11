import mongoose from 'mongoose';

const Category = mongoose.Schema({
    name:{type: String, required: true},
    imageSrc:{type: String, default: ''},
    user:{type: ObjectId, ref: 'User', required: true}
})

export default mongoose.model('Category', Category)