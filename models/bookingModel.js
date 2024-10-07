import { model, Schema } from "mongoose";

const bookSchema = new Schema({
    firstName:{
        type:String,
        // required: true
    },
    lastName:{
        type:String,
        // required: true
    },
    sex:{
        type:String,
        enum:['male','female']
    },
    seatNumber:{
        type: Number,
        // required: true,
        unique: true
    },
    email:{
        type:String,
        // required:true,
        unique: true
    }
})

export  const BookSchema =model('Booking',bookSchema);