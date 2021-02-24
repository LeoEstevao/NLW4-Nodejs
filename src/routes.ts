import { Router } from 'express';
import { SurveysController } from './controllers/SurveysController';
import {UserController} from './controllers/UserController';

const userController = new UserController();
const surveyController = new SurveysController();
const router = Router();

router.post('/users', userController.create);
router.post('/surveys', surveyController.create);

router.get('/surveys', surveyController.show);

export { router };