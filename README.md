
# Overview

This project is a Node.js application built with Express and Sequelize, providing CRUD operations for user, product, order, and image models. The application incorporates bcrypt for password hashing, JWT for token management, multer for file uploads, and implements a one-to-many relationship.




## Tech Stack

**Server:** Node, Express

**Database:** MySQL

**ORM:** Sequalize

**NPM:** cors, bcrypt, body-parser, jsonwebtoken, multer, nodemon


## Features


#### Authentication:
- User authentication is implemented using JWT tokens.
- The application uses a checkAuth middleware to validate JWT tokens for secure routes.

#### Authorization:
- Users are only allowed to delete orders they have created.
- Users can only see the list of orders they have created.

#### File Uploads:
- Multer is used for handling file uploads, allowing users to associate images with products.

#### User Management:
- CRUD operations for user entities.
- Passwords are securely hashed using bcrypt.

#### Product Management:
- CRUD operations for product entities.
- Each product is associated with an image through a one-to-one relationship.

#### Order Management:
- CRUD operations for order entities.
- One order is linked to one user and one product, establishing a one-to-many relationship.

#### Image Management:
- Create, Read, Delete operations for image entities.
- Each product is linked to an image through a one-to-one relationship.
