const mysql = require('mysql2');

const connectWithRetry = () => {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'billing',
  });

  connection.connect((err) => {
    if (err) {
      console.error('DB connection failed, retrying in 5s...', err);
      setTimeout(connectWithRetry, 5000); // Retry after 5 seconds
    } else {
      console.log('Connected to MySQL');
    }
  });
};

connectWithRetry();

