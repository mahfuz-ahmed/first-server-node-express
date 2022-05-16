const { response } = require('express');
const express=require('express');
var cors = require('cors');
const app=express();
const port=3000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello from node i am excited to learn node.js with node mon. oK satart');
});

const users =[
    {id:0,name:"Mejbah",add:"Mirpur"},
    {id:1,name:"mahfuz",add:"Mirpur"},
    {id:2,name:"Ahmed",add:"Mirpur"},
    {id:3,name:"Samsul",add:"Mirpur"},
    {id:4,name:"Ajmul",add:"Mirpur"},
    {id:5,name:"jamrul",add:"Mirpur"},
    {id:6,name:"Kamrul",add:"Mirpur"},
    {id:7,name:"Amrul",add:"dhaka"},
]

// use quary perameter search 

app.get('/user',(req,res)=>{
    const search=req.query.search;

    if(search){
        const searchResult=users.filter(user=>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
})

// app.METHEOD

app.post('/user',(req,res)=>{
    const newUser=req.body;
    newUser.id=users.length;
    users.push(newUser);

    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

//api request and api response

// app.get('/users',(req, res)=>{
//     res.send(users)
// });

//Dynamic perameter
app.get('/user/:id',(req,res)=>{
    const id=req.params.id;
    let user=users[id];
    res.send(user);
})

//Local host port

app.listen(port,()=>{
    console.log('listening to port',port);
})