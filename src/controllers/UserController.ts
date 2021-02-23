import { Request, response, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';
class UserController {

    async create(req: Request, res: Response) {        
        const { name, email } = req.body;

        // 'Repository' is like a "method that give permission" for a model interact with database'
        const usersRepository = getRepository(User);

        // SELECT * FROM USERS WHERE EMAIL = body.EMAIL limit 1;
        const usersAlreadyExists = await usersRepository.findOne({
            email
        })
        if(usersAlreadyExists) {
            return res.status(400).json({
                error: "User already exists!",
            });
        }


        const user = usersRepository.create({
            name,
            email
        })
        
        await usersRepository.save(user);

        return res.json(req.body);
    }
};

export { UserController };