import {restore} from 'saveqlite';
// Restore db from backup file 
const location = `../dev.db`;
function restoreDB(loc: string, backup: string) {
 restore(`${loc}`, `../backups/${backup}`)
    .then(() => {
      console.log(`Backup complete at: ${loc}`)
    })
    .catch((err: Error) => {
      console.error(`Backup failed: ${err.message}`)
    });
  }
}
export {restoreDB};
