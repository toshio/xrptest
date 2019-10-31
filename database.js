const sqlite3 = require('sqlite3');

class Database {
  constructor(databasePath) {
    this.db = new sqlite3.Database(databasePath);
  }

  async createUserTable() {
    return new Promise((resolve, reject)=>{
      this.db.run(
        'CREATE TABLE IF NOT EXISTS User (' +
        '  address TEXT PRIMARY KEY,' +
        '  name TEXT NOT NULL' +
        ')', (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
    });
  }

  async addUser(address, name) {
    return new Promise((resolve, reject)=>{
      this.db.run(
        'INSERT OR REPLACE INTO User (' +
        '  address, name' +
        ') VALUES (?, ?)', [address, name], (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(true);
          }
        }
      );
    });
  }

  async getUSers() {
    return new Promise((resolve, reject)=>{
      this.db.all(
        'SELECT address, name FROM User ORDER BY name',
        (err, items) => {
          if (err) {
            reject(err);
          } else {
            resolve(items);
          }
        }
      );
    });
  }
}

async function main() {
  let database = new Database('./test.db');
  await database.createUserTable();
  await database.addUser('rNBotvkqrkbFBNj76ogXBGcEiBknmrvSB3', 'Alice');
  await database.addUser('rw8DkN9T32pfZokxpH7myQzJAhBzoMnP75', 'Bob');
  await database.addUser('rsCn3TpsvXkJ9YEQr8XB1rZDpWqFwgKmX1', 'Charlie');
  let users = await database.getUSers();
  console.log(users);
}

main();
