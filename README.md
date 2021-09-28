# Blog System

## Project introduction

This is a blog system created using NodeJS as backend support, and MongoDB Cloud as the database. There are mainly five pages:

1. overview page

In this page, you can see all the blogs that are created by different people, even if you are not logged in. From this page, you can also sign up, log in, and create new blog. Note that new blog can only be created when you are logged in. 

2. blog page

In this page, you are presented with the content of the blog. You can view the content even if you are not logged in. And if you are the author of the blog, you can choose to delete it if you wish to.

3. create blog page

You can direct to this page from the overview page. But when you do so, you will only be directed to this page if you are logged in. If not, you will be directed to the log in page.

4. sign up page

You can create new account in this page. You will be asked to enter your username, password, and confirm password. The password must be at least 8 characters and be a mix of at least two of numbers, character, and symbols (only _ is allowed for symbol)

5. log in page

You can log in to the system from this page. You will be asked to enter the username and the password. And you can log out whenever you want to.

## To run the project

1. Please you have node installed on your device
2. Download the project folder the change the current working directory to this folder
3. Run the following command

> ```
> node app
> ```

## Technologies used

* Express is used in this project to create request handlers.
* EJS is used to create views.
* MongoDB Cloud and mongoose are used to provide database support