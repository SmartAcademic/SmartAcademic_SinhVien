const express = require("express");
const app = express();


const dkhpRouter = require('./routers/dkhp');

app.use(express.json({ extended : true}));
// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

app.use(express.static('node_modules'));
app.use('/bootstrap', express.static(__dirname + 'node_modules/bootstrap/dist/css/bootstrap.min.css'));

// Set views
//app.use(express.static('./views'));
app.set('view engine', 'ejs');
app.set('views', './views');;


app.get('/', (req, res) =>{
    return res.render('Login');
});

app.get('/home', (req, res) =>{
    return res.render('Menu');
});

app.post('/home', (req, res) => {
    return res.render('Menu');
});

app.get('/dkhp', (req, res) =>{
    return res.render('Dkhp');
});
app.get('/dangky', (req, res) =>{
    return res.render('Header');
});
// app.use('/', dkhpRouter);

app.get('/congno', (req, res) =>{
    return res.render('CongNo');
});
app.get('/thongtin', (req, res) =>{
    return res.render('Profile');
});

app.get('/ghichu', (req, res) =>{
    return res.render('GhiChu');
});


app.get('/foot', (req, res) =>{
    return res.render('Footer');
});

app.listen(7000, () =>{
    console.log("Server is running on port 7000!");
});