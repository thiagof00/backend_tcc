import Users from '../tables/Users'
import modelUser from '../models/ModelUser'
import { compare } from 'bcrypt'
interface Request{
    email:string
    password:string

}
interface Response{
    user: modelUser
}

export default class AuthenticationService {

    public  execute ({email, password}:Request){
        
        const user =  Users.findOne({where: {email} })

        if(!user){
            throw new Error("Incorrect email/password combination")
        }

        const passwordMatch = compare(password, user.senha)



        return user
}

}
 