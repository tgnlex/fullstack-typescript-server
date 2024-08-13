import Database from 'better-sqlite3';
import {resolve} from 'path';

let opts = { verbose: console.log }
let dbPath = resolve('/repos/ts-server/src/api/db/dev.db')

const db = new Database(dbPath, opts);

export default db;
