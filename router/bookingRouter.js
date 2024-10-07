import { Router } from "express";
import { addBooking, deleteBooking, getAllBookings, getOneBooking, updateBooking } from "../controller/bookingController.js";

// create a Router
const bookingRouter = Router();

// Define router
bookingRouter.get('/booking',getAllBookings)
bookingRouter.get('/booking/:id',getOneBooking)
bookingRouter.post('/booking',addBooking)
bookingRouter.patch('/booking',updateBooking)
bookingRouter.delete('/booking',deleteBooking)

// Export the router
export default bookingRouter;

