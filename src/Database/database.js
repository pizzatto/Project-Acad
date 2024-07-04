/* import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "DatabaseV.db";
const database_version = "1.0";
const database_displayname = "SQLite Database";
const database_size = 200000;

let db;

export const openDatabase = async () => {
  try {
    console.log('Abrindo banco de dados:', database_name);
    db = await SQLite.openDatabase(
      database_name,
      database_version,
      database_displayname,
      database_size
    );
    console.log('Banco de dados aberto:', db);
    return db;
  } catch (error) {
    console.error('Erro ao abrir banco de dados:', error);
    throw error;
  }
};

export const createUsersTable = async () => {
  try {
    db = await openDatabase();
    if (!db) throw new Error('Banco de dados não foi aberto');
    console.log('Banco de dados aberto:', db);
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            age INTEGER,
            email TEXT,
            password TEXT
          )`,
          [],
          () => {
            console.log('Tabela "users" criada com sucesso');
            resolve();
          },
          (error) => {
            console.log('Erro ao criar tabela "users":', error);
            reject(error);
          }
        );
      });
    });
  } catch (error) {
    console.log('Erro ao criar tabela "users":', error);
    throw error;
  }
};

export const createTrainingsTable = async () => {
  try {
    db = await openDatabase();
    if (!db) throw new Error('Banco de dados não foi aberto');
    console.log('Banco de dados aberto:', db);
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS trainings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            date TEXT,
            type TEXT,
            duration INTEGER,
            FOREIGN KEY (user_id) REFERENCES users(id)
          )`,
          [],
          () => {
            console.log('Tabela "trainings" criada com sucesso');
            resolve();
          },
          (error) => {
            console.log('Erro ao criar tabela "trainings":', error);
            reject(error);
          }
        );
      });
    });
  } catch (error) {
    console.log('Erro ao criar tabela "trainings":', error);
    throw error;
  }
};

export const insertUser = async (name, age, email, password) => {
  try {
    db = await openDatabase();
    if (!db) throw new Error('Banco de dados não foi aberto');
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `INSERT INTO users (name, age, email, password) VALUES (?, ?, ?, ?)`,
          [name, age, email, password],
          () => {
            console.log(`Usuário ${name} inserido com sucesso`);
            resolve();
          },
          (error) => {
            console.log('Erro ao inserir usuário:', error);
            reject(error);
          }
        );
      });
    });
  } catch (error) {
    console.log('Erro ao inserir usuário:', error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    db = await openDatabase();
    if (!db) throw new Error('Banco de dados não foi aberto');
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `SELECT * FROM users`,
          [],
          (tx, results) => {
            let users = [];
            for (let i = 0; i < results.rows.length; i++) {
              users.push(results.rows.item(i));
            }
            console.log('Usuários recuperados:', users);
            resolve(users);
          },
          (error) => {
            console.log('Erro ao recuperar usuários:', error);
            reject(error);
          }
        );
      });
    });
  } catch (error) {
    console.log('Erro ao recuperar usuários:', error);
    throw error;
  }
};

export const initializeDatabase = async () => {
  try {
    await createUsersTable();
    await createTrainingsTable();
    await insertUser("Guilherme Pizzatto", 19, "gui@app.com", "123");
    await insertUser("Marlon Muller", 19, "rj@gmail.com", "tr41r");
    await insertUser("Maria", 21, "maria@clr.com", "4890");
    await insertUser("Fernanda", 26, "fefe@pg.com", "0199");
    console.log('Usuários iniciais inseridos com sucesso');
  } catch (error) {
    console.log('Erro ao inicializar banco de dados:', error);
  }
}; */