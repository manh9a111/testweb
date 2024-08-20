const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const authRoutes = require('/Users/manh/Back_end/nodejs/routes/authRoutes.js');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
