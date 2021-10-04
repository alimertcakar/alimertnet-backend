import Env from '@ioc:Adonis/Core/Env'

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with Mongodb databases.
  |
  */
  connection: Env.get('DB_CONNECTION', 'mongodb'),
  /*-------------------------------------------------------------------------*/

  mongodb: {
    client: 'mongodb',
    connectionString: Env.get('DB_CONNECTION_STRING', ''),
    connection: {
      host: Env.get('DB_HOST', 'cluster0.yc8w3.mongodb.net'),
      port: Env.get('DB_PORT', 27017),
      username: Env.get('DB_USER', 'alimert'),
      password: Env.get('DB_PASSWORD', '5gH636JbBnVQJx'),
      database: Env.get('DB_DATABASE', 'adonis'),
      options: {
        // replicaSet: Env.get('DB_REPLICA_SET', '')
        // ssl: Env.get('DB_SSL, '')
        // connectTimeoutMS: Env.get('DB_CONNECT_TIMEOUT_MS', 15000),
        // socketTimeoutMS: Env.get('DB_SOCKET_TIMEOUT_MS', 180000),
        // w: Env.get('DB_W, 0),
        // readPreference: Env.get('DB_READ_PREFERENCE', 'secondary'),
        // authSource: Env.get('DB_AUTH_SOURCE', ''),
        // authMechanism: Env.get('DB_AUTH_MECHANISM', ''),
        // other options
      },
    },
  },
}
