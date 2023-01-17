const express = require('express');
const db = require("./utils/database");
const initModels = require('./models/init.models');
const usersRoutes = require('./routes/user.routers');
const ucRoutes = require('./routes/usersCourses.routers');
const cousersRoutes = require('./routes/courses.routers');
const videosRoutes = require('./routes/videos.routers');
const categoriesRoutes = require('./routes/categories.routers');

const app = express();

app.use(express.json());

const PORT = 8000;

db.authenticate().then(() => {
  console.log('successful authentication');
}).catch((error) => {
  console.log(error);
});

initModels();

db.sync({force:false})
  .then(() => console.log('database sync'))
  .catch((error) => console.log(error));



app.get('/', (req, res) => {
  res.status(200).json({ message:'welcome'});
});

app.use('/api/v1', usersRoutes);
app.use('/api/v1', ucRoutes);
app.use('/api/v1', cousersRoutes);
app.use('/api/v1', videosRoutes);
app.use('/api/v1', categoriesRoutes);

app.listen(PORT, () => {
  console.log(`server running on the port ${PORT}`);
});