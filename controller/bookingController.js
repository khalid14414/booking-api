import { BookSchema } from "../models/bookingModel.js";

export const getAllBookings = async (req, res) => {
    try {
        // fetch all booking from the database
        const bookings =await BookSchema.find();
        res.status(200).json(bookings);
    } catch (error) {
        next(error)
    }
}

export const getOneBooking = (req, res) => {
    res.status(200).json('This is your booking');
}

export const addBooking = async (req, res, next) => {
    try {
        //const newBooking = new booking(req.body)
        await BookSchema.create(req.body)
    //Respond to the request
        res.status(201).json('bookings');
    } catch (error) {
        next(error);
    }
}

export const updateBooking = (req, res) => {
    res.status(200).json('Booking Updated');
}

export const deleteBooking = (req, res) => {
    res.status(200).json('Booking deleted');
}