import server from './app/index.ts';


const main = async () => {
  console.info(`[MAIN]: Starting main loop...`)
  server();
}

main();
