const dbConfigs = {
  local: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'ddd_user',
    password: 'password',
    database: 'ddd_verification',
    // entities,
    logging: true,
    synchronize: false,
  },
};

const dbConfig = dbConfigs.local;
// process.env.ENV === undefined ? dbConfigs.local : dbConfigs[process.env.ENV];
module.exports = dbConfig;
