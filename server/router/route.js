import { Router } from "express";

const router = Router()

/** import all controllers */
import * as controller from '../controllers/appController.js'
import Auth, { localVariables } from '../middleware/auth.js'


/*** POST Methods */
router.route('/register').post(controller.register)
router.route('/registerMail').post();   // send the email
router.route('/authenticate').post((req, res) => res.end());   // authenticate user
router.route('/login').post(controller.verifyUser, controller.login);          // login in app

/*** GET Methods */
router.route('/user/:username').get(controller.getUser);  // user with username
router.route('/generateOTP').get(controller.verifyUser, localVariables, controller.generateOTP);     // generate random OTP
router.route('/verifyOTP').get(controller.verifyOTP);       // verify generated OTP
router.route('/createResetSession').get(controller.createResetSession);  // reset all the varibles

/*** PUT Methods */
router.route('/updateuser').put(Auth, controller.updateUser);      // is to update user profile
router.route('/resetPassword').put(controller.verifyUser, controller.resetPassword);   // use to reset password

export default router;