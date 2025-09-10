import express from 'express';
import router from './routes/index.js';

const app = express();

// Connect the router to the app
app.use('/', router);

// Start the server and listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

export default app;
