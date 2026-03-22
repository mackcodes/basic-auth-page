const express = require('express');
const app = express();
const userModel = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const cookieParser = require('cookie-parser');
const path = require('path');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.render("sign-up")
});

app.get("/sign-up", (req, res) => {
    res.render("sign-up");
});

app.post("/sign-up", (req, res) => {
    let{username, email, password, age} = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let createdUser = await userModel.create({
                username,
                email,  // when key and value are same we can just write like this
                password: hash,
                age
            })

            let token = jwt.sign({email}, "process.env.JWT_SECRET");
            res.cookie("token", token);
            res.send(createdUser);
        })
    })

    
})

app.get("/sign-in", (req, res) => {
    res.render("sign-in");
})

app.post("/sign-in", async (req, res) => {
    let user = await userModel.findOne({email: req.body.email})
    if(!user) return res.send("Invalid email or password!!");

    const match = await bcrypt.compare(req.body.password, user.password);
    if(!match) return res.send("Invalid email or password!!");

    let token = jwt.sign({email: user.email}, "process.env.JWT_SECRET");

    res.cookie("token", token);
    res.send("Login Successful!!!!");
})

app.get("/logout", (req, res) => {
    res.cookie("token", "");
    res.redirect("/");
})

app.listen(3000);