import Users from '../tables/Users'
import modelUser from '../models/ModelUser'

export default class UpdatesServices {

    public push(id:number){

        const Alldata = Users.findOne({where: {id} })
        .then((user)=>{
            return user
        })
        .catch((err)=>{
            return err
        })

        return Alldata
    }

    public execute(user:modelUser){
        const UpdateUser = Users.update(user, {where:{id:user.id}})
        .then((user)=>{
            return user
        })
        .catch((err)=>{
            return err
        })

        return UpdateUser
    }
}