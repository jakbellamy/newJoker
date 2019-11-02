import express from 'express';
import {authController} from '../controllers/authController'
import {auth} from '../middleware/auth'

//INITIALIZE ROUTER
const router = express.Router();

//DEFINE ROUTES
  // --------------
  // *ROUTESGOHERE*
  // --------------

//EXPORT
export {authRouter};
