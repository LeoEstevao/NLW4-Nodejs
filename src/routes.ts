import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { SurveysController } from './controllers/SurveysController';
import { SendMailController } from './controllers/SendMailController'
import { AnswerController } from './controllers/AnswerController';
import { NpsController } from './controllers/NpsController';

const userController = new UserController();
const surveyController = new SurveysController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

const router = Router();

router.post('/users', userController.create);
router.post('/surveys', surveyController.create);
router.post('/sendMail', sendMailController.execute);
router.get('/answers/:value', answerController.execute);
router.get('/nps/:survey_id', npsController.execute);

router.get('/surveys', surveyController.show);

export { router };