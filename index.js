const express = require('express');
const helmet = require('helmet');
const dishRoutes = require('./server/dishRoutes');
const recipesRoutes = require('./server/recipesRoutes');

const app = express();

// Routes URL
const dishUrl = '/api/dishes';
const recipesUrl = '/api/recipes';

// Express middlewares
app.use(helmet());
app.use(express.json());

app.use(dishUrl, dishRoutes);
app.use(recipesUrl, recipesRoutes);


// HOME request
app.get('/', (req, res) => {
  res.status(200).json("Hello from GET request");
});


const PORT = process.env.PORT || 1234;
app.listen(PORT, () => console.log(`Express app listening at http://127.0.0.1:${PORT}`));
