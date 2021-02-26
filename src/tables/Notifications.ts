import {Optional, Model, INTEGER, STRING} from 'sequelize'
import sequelize from './db'

interface NotificationAttributes{
    id?: number;
    idUser?: number;
    nomeSupervisor: string;

}

interface NotificationCreateProps extends Optional<NotificationAttributes, 'id'>{}
interface NotificationInstance extends Model<NotificationCreateProps,NotificationAttributes>{}

const Notifications = sequelize.define<NotificationInstance>('notification',{
    idUser:{
        type: INTEGER
    },
    nomeSupervisor:{
        type: STRING
    }

})

//Notifications.sync({force: true})

export default Notifications