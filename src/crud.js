require("dotenv").config();
const express = require('express');
const app = express();

app.use(express.json());

let book = [
    {
        id:1,
        title: 'book1',
        author: 'Author1'
    },
    {
        id:2,
        title: 'book2',
        author: 'Author2'
    },
    {
        id:3,
        title: 'book3',
        author: 'Author3'
    }
];

app.get('/book',(req,res) => {
    res.json(books);
});

app.get('/book/:id',(req,res)=>{
    const book = books.find(b => b.id === parseInt (req.params.id));
    if(!book) res.status(404).send('Book not found');
    res.json(book);
});

app.post('/books',(req,res) =>{
    const book ={
        id:books.lenght +1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(book);
    res.send(book);
});

app.put('/books/:id',(req,res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) res.status(404).send('Book not found');
    book.title = req.body.title;
    book.author = req.bidy.author;
    res.send(book);
});

app.delete('/books/:id',(req,res) =>{
    const book = books.find(b => b.id === parseInt(req.params,id));
    if(!book) res.status(404).send('Book not found');
    const index = book.indexOf(book);
    book.splice(index,1);
    res.send(book);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

