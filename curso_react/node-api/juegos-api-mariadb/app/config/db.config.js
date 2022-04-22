module.exports = {
    /*HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME,
    port: process.env.DB_PORT,*/
    HOST: process.env.MARIADB_HOST,
    USER: process.env.MARIADB_USER,
    PASSWORD: process.env.MARIADB_PASSWORD,
    DB: process.env.MARIADB_NAME,
    port: process.env.MARIADB_PORT,
    api_port:process.env.NODE_DOCKER_PORT,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };