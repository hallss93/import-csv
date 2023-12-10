export default {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./api/database/stream.db3",
    },
    migrations: {
      directory: "./api/database/migrations",
    },
    seeds: {
      directory: "./api/database/seeds",
    },
    pool: {
      afterCreate: (conn: any, done: any) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
  },
};
