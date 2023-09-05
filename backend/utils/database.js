const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_NAME,process.env.DATABASE_USER,process.env.DATABASE_PASS,{
 host: '127.0.0.1', // or 'localhost'
  port: 3306,
  dialect : 'mysql' ,
})

module.exports = sequelize;
