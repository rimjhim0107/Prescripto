import express from 'express';
import { doctorList } from '../controllers/doctorController.js';

const doctorRouter = express.Router();

// Define doctor-related routes here

doctorRouter.get('/list', doctorList);

export default doctorRouter;