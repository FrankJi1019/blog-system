const isValidPassword = (password) => {
    const hasNum = password.search(/[0-9]/) != -1
    const hasChar = password.search(/[a-zA-Z]/) != -1
    const hasPoun = password.search(/[_.]/) != -1
    return (hasNum + hasChar + hasPoun) >= 2 && password.length >= 8
}

const express = require("express")
const mongoose = require("mongoose")
const User = require("./models/User")
const Blog = require("./models/Blog")

const app = express()

const dbURI = "mongodb+srv://admin:admin@cluster0.eqcbu.mongodb.net/Blog?retryWrites=true&w=majority"
mongoose.connect(dbURI)

app.set("view engine", "ejs")

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.listen(3000, () => {
    console.log("Server powered on");
})

let currentUser = null

app.get("/", (req, res) => {
    Blog.find()
    .then(blogs => {
        res.render("overview", {currentUser, blogs})
    })
    .catch(err => {
        console.log(err);
    })
})

app.post("/", (req, res) => {
    currentUser = null;
    res.json("/")
})

app.get("/login", (req, res) => {
    res.render("login", {
        currentUser,
        isInfoWrong: false
    })
})

app.post("/login", (req, res) => {
    const username = req.body.username
    const password = req.body.password
    User.find()
    .then(data => {
        const matched = data.find((element) => {
            return username == element.username && password == element.password
        })
        if (matched == undefined) {
            res.render("login", {currentUser,
                isInfoWrong: true
            })
        } else {
            currentUser = matched
            res.redirect("/")
        }
    })
    .catch(err => {
        console.log(err);
    })
})

app.get("/signup", (req, res) => {
    res.render("signup", {
        currentUser, 
        isUsernameExist: false, 
        isPasswordDifferent: false,
        isPasswordValid: false,
        isUsernameEmpty: false
    })
})

app.post("/signup", (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword
    let repeat = false
    const infoCorrect = {
        isUsernameExist: false,
        isPasswordDifferent: false,
        isPasswordValid: false,
        isUsernameEmpty: false
    }
    User.find()
    .then((data) => {
        repeat = data.some(user => {
            return user.username == username
        })
        if (repeat) {
            res.render("signup", {
                currentUser, 
                ...infoCorrect,
                isUsernameExist: true
            })
        } else if (username.length == 0) {
            res.render("signup", {
                currentUser,
                ...infoCorrect,
                isUsernameEmpty: true
            })
        } else if (!isValidPassword(password)) {
            res.render("signup", {
                currentUser, 
                ...infoCorrect,
                isPasswordValid: true
            })
        } else if (password != confirmPassword) {
            res.render("signup", {
                currentUser, 
                ...infoCorrect, 
                isPasswordDifferent: true,
            })
        } else {
            const user = new User({username, password})
            user.save()
            .then((data) => {
                currentUser = data
                res.redirect("/")
            })
            .catch(err => {
                console.log(err);
            })
        }
    })
    .catch(err => {
        console.log(err);
    })
})

app.get("/new", (req, res) => {
    if (currentUser == null) {
        res.redirect("/login");
    } else {
        res.render("new", {
            currentUser,
            isTitleEmpty: false,
            isContentEmpty: false
        })
    }
})

app.post("/new", (req, res) => {
    const title = req.body.title
    const content = req.body.content
    const author = currentUser.username
    if(title.length == 0 || content.length == 0) {
        res.render("new", {
            currentUser,
            isTitleEmpty: title.length == 0,
            isContentEmpty: content.length == 0
        })
    }
    const time = new Date()
    const blog = new Blog({title, content, author, time})
    blog.save()
    .then(() => {
        res.redirect("/")
    })
    .catch(err => {
        console.log(err);
    })
})

app.get("/:id", (req, res) => {
    const id = req.params.id
    Blog.findById(id)
    .then(blog => {
        res.render("blog", {
            currentUser,
            blog
        })
    })
    .catch(err => {
        console.log(err);
    })
})

app.delete("/:id", (req, res) => {
    const id = req.params.id
    Blog.findByIdAndDelete(id)
    .then(() => {
        res.json({
            redirect: "/"
        })
    })
    .catch(err => {
        console.log(err);
    })
})

app.use((req, res) => {
    res.render("404", {
        currentUser
    })
})