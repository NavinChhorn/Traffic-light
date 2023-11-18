const express = require('express');
const app = express();
const cors = require('cors');

app.listen(3000);
app.use(cors({origin:"*"}))
let color = '';
app.get('/getColor',(req, res)=>{
    res.send(color);
})
app.get('/saveColor',(req, res)=>{
    color = req.query.color;
    res.send(color);

})

app.use(express.static('public'))