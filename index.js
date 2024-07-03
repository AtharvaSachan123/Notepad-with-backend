const express =require('express');
const app = express();
const path=require('path');
const fs=require('fs');
const { log } = require('console');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


app.get('/files/:filename', (req, res) => {

    fs.readFile(`./files/${req.params.filename}`,"utf-8",function(err,filedata){
       res.render('show',{filename:req.params.filename,filedata:filedata});
    })
});


app.get('/edit/:filename', (req, res) => {

    res.render('edit',{filename:req.params.filename});
});
app.post('/edit', (req, res) => {
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, (err) => {
        res.redirect('/');
    });
});



app.get('/', (req, res) => {
    fs.readdir(`./files`,(err,files)=>{
        if(err){
            console.log(err);
        }else{
            res.render("index",{files:files});
        }
    })
    
});

app.post('/create',function(req,res){
   fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,(err)=>{
        res.redirect('/');
   })
})


app.listen(3000, () => { 
    console.log('Server is running on port 3000');
});