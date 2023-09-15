import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    contact:{
        type: Number,
        required: true
    }
})

const User = model('user',UserSchema);

export default User;