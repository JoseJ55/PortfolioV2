const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

const routes = require('./routes')

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(PORT, () => console.log(`Listening at ${PORT}`));