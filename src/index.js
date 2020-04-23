const server = require('./server');
const PORT = process.env.PORT || 5000;

const db = require('./utils/db');

server.listen(PORT, async () => {
  await db(); // start the database
  console.log(`Started on port ${PORT}`);
})
