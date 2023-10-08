const express = require('express');
const app = express();

const PORT = 8080;

app.use(express.static('public'));
app.use('/videos', express.static('../public/videos'));
app.set('view engine', 'ejs')
app.set("views", "./src/views");


const indexRouter = require('./routes');  


app.use('/', indexRouter)


app.listen(PORT, () => console.log(`Express listening PORT: ${PORT}`))
