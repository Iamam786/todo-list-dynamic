const express = require('express');

const port = 3000;
const app = express();

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true })); //Iska use data ko pass karne ke liye karte hai jaisse post method me
// app.use(express.static(__dirname + '/public'))

const newData = [];

app.get('/', (req, res) => {
    res.render('home',{showData:newData});
})

app.post('/',(req,res)=>{
  let todo =   req.body.todo;
   newData.push(todo);
    res.redirect('/')
    console.log(newData);
})
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
})