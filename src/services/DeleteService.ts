import Users from '../tables/Users'


export default class DeleteService {

    public execute(id: number){
        const Deleted = Users.destroy({where:{id: id}}).then((response)=>{
            return response
        }).catch((err)=>{
            throw new Error(err)
        })

        return Deleted
    }
}