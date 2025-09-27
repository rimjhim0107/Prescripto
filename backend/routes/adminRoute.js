import express from 'express'
import { addDoctor, allDoctors, loginAdmin } from '../controllers/adminController.js'
import upload from '../middleware/multer.js'
import authAdmin from '../middleware/authAdmin.js';
import { changeAvailability } from '../controllers/doctorController.js';

const adminRouter = express.Router();

adminRouter.post('/add-doctor',authAdmin,upload.single('image'),addDoctor)
adminRouter.post('/login',loginAdmin)
adminRouter.post('/all-doctors',authAdmin,allDoctors);
adminRouter.post('/change-availability',authAdmin,changeAvailability);
 
export default adminRouter


// to add a doctor as admin from postman the token recieved from sending post req to /api/admin/login using admin email and admin password we will input that token into headers with atoken as key and send the post req to /api/admin/add-doctor this will add doctor as an admin