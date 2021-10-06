# Blog System

## Set up

To run this program, please follow the steps below:

1. please make sure you have node installed on your device
2. download the repo folder and direct to it
3. on the terminal, execute the following command

```
> node app
```

4. The following text should have been displayed on the console

```
Server powered on
```

5. in the browser, visit the link "localhost:3000"

## Introduction

The system consists of five pages:

### Overview page

This is the page you will first see when you request "localhost:3000" in the browser. From this page, you can do the following things

1. Log in (if you have an account) and sign up (to create a new account)
2. View the content of a blog. You can still read the content even if you are not logged in
3. Create new blog, but you can only do this when you are logged in. If you try to create a new blog without logging in, you will be directed to the login page

### Blog page

You can access this page by clicking a blog from the overview page. In this page, you are presented with the blog title, author of the blog, the entire content of the blog, the time that the blog was created, and the comments on this blog. For each comment, you can see who wrote the comment and when it is written. If you are logged in, you will have the option to leave your comment under the blog. And if you are the author of this blog, you can edit or delete the blog.

### Create new blog page

In this page you are allowed to create a new blog. You are required to write the title and the content of the blog - you can not leave them blank. 

### Log in page

Where you can log into the system if you have already got an account. You will be redirected to the overview page after logging in. You can also choose to log out later on.

### Sign up page

Where you can create a new account. You will be asked to enter the username, password, and confirm password.

Please also note that, no matter which page you are currently on, you are presented with a header, you can always go to the homepage (overview page) by clicking on the project title (MY BLOG) on the left side of the header

## Techniques used

1. NodeJS, as the back-end support
    1. express module - to create request handlers
    2. mongoose module - to interact with the database
2. MongoDB Cloud: a cloud based mongo database, to store the information of all users and blogs
3. EJS as the view engine
4. CSS
5. AJAX
6. ES6

## Development Clarification

This is a project developed by Shiyuan (Frank) Ji solely. It is developed to wider the area of knowledge and gain more experience in development. This is not a project developed for a coursework of university or a task for any organization, but on own interest. 

Concepts related to this project were not taught by any organization, but were self-learned from Youtube videos. The link to the videos is below

*https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU*

