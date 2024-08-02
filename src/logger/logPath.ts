import path from 'path';

const logFolder = path.resolve("/repos/ts-node-app/backend/logs/");

function logPath(file: string): string {
  const logLocation = path.join(logFolder, `${file}`)
  return logLocation;
}
export {logPath}
