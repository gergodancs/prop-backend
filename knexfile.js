// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg', // Using PostgreSQL
    connection: {
      host: '127.0.0.1',       // PostgreSQL host (localhost)
      port: 5432,              // Default PostgreSQL port
      user: 'postgres',        // PostgreSQL user (change if needed)
      password: '11Mimi30',    // Your database password
      database: 'postgres'     // Your database name (change if needed)
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',   // Directory where migration files will be stored
      tableName: 'knex_migrations' // Table to keep track of migrations
    },
    seeds: {
      directory: './seeds'         // Directory where seed files will be stored
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
