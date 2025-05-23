const mysql = require('mysql2');

const connectWithRetry = () => {
  const config = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'billing',
  };

  console.log("Trying to connect with config:", config);

  const connection = mysql.createConnection(config);

  connection.connect((err) => {
    if (err) {
      console.error('DB connection failed, retrying in 5s...', err.message);
      setTimeout(connectWithRetry, 5000);
    } else {
      console.log('Connected to MySQL');
    }
  });
};

connectWithRetry();

