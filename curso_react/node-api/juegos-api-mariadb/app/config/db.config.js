module.exports = {
    /*HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME,
    port: process.env.DB_PORT,*/
    HOST: process.env.POSTGRESQL_HOST,
    USER: process.env.POSTGRESQL_USER,
    PASSWORD: process.env.POSTGRESQL_PASSWORD,
    DB: process.env.POSTGRESQL_NAME,
    port: process.env.POSTGRESQL_PORT,
    api_port:process.env.NODE_DOCKER_PORT,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };