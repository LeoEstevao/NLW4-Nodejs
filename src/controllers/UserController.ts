import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

import * as yup from 'yup';
import { AppError } from '../errors/AppError';

class UserController {

    async create(req: Request, res: Response) {        
        const { name, email } = req.body;

        const schema = yup.object().shape({
            name: yup.string().required('New default error message'),
            email: yup.string().email().required()
        })

        // Other way to validate, with 'custom error'
        // if(!(await schema.isValid(req.body))) {
        //     return res.status(400).json({ 
        //         error: 'Validation failed!'
        //     });
        // }

        // Other way to validate, with the yup default error log
        try {
            await schema.validate(req.body, {abortEarly: false});
        } catch (err) {
            throw new AppError(err)
        }



        // 'Repository' is like a "method that give permission" for a model interact with database'
        const usersRepository = getCustomRepository(UsersRepository);

        // SELECT * FROM USERS WHERE EMAIL = body.EMAIL limit 1;
        const usersAlreadyExists = await usersRepository.findOne({
            email
        })
        if(usersAlreadyExists) {
            throw new AppError('User already exists!');
        }


        const user = usersRepository.create({
            name,
            email
        })
        
        await usersRepository.save(user);

        return res.status(201).json(user);
    }
};

export { UserController };
