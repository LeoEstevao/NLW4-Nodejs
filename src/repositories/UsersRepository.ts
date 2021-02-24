import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/User";

// UsersRepository inherit Repository Methods
@EntityRepository(User)
class UsersRepository extends Repository<User> {

}

export { UsersRepository };