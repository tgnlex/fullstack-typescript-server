import app from './app';
import {PORT, SERVER} from '../config/constants.ts';

const server = async() => {
  let message = `Server running on ${SERVER}`
    app.listen(PORT, () => { console.info(message)
  }).on("error", (error) => {
      console.error('error', (error.mesaage));
      console.error('code', (error.code));
      throw new Error(error.message);
 })
}

export default server;
