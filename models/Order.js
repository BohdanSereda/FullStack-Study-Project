import mongoose from 'mongoose';

const Order = mongoose.Schema({
    date:{type: Date, default: Date.now},
    order:{type: Number, required: true},
    list:[
        {
            name:{type: String},
            quantity:{type: Number},
            cost:{type: Number}
        }
    ],
    user:{type: ObjectId, ref: 'User', required: true},
})

export default mongoose.model('Order', Order)