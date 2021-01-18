import {Sequelize} from 'sequelize'


const sequelize = new Sequelize('tcc', 'root', '', {
    host:'localhost',
    dialect:'mysql'
})

sequelize.authenticate().then(()=>{
    console.log("The server is connected to database")

}).catch(()=>{
    console.log("The server is not connected!!!!!!!!!!")
})


export default sequelize