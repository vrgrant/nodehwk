const express = require('express');

const app = express();

app.listen(3000);

app.set('view engine', 'ejs')

app.get('/', (req, res) => { 
    const blogs = [
    //{title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //{title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //{title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];

  res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) => {
  res.render('about', {title:'About'});
});

app.get('/blogs/create' , (req, res) => {
    res.render('create', {title:'Create a new blog'});
});

app.use((req,res) => {
    res.render('404', { title: '404' });
})



// 404 page
app.use((req, res) => {
  res.status(404).render('404');
});

app.get('/', (req,res) =>{
    //res.send('<p>home page</p>')
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req,res) =>{
    //res.send('<p>about page</p>')
     res.sendFile('./views/about.html', {root: __dirname});
});

// redirects
app.get('/about-us', (req,res) => {
    res.redirect('/about');
});

//404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
});