---
title: "Authentication with json webtokens"
date: "Jan 14, 2023"
rTime: "6 min"
tags: ["javascript", "node js", "authentication"]
exerpt: "JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object."
cover_image: "https://abelwanyonyi.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fstock%2Funsplash%2F6pflEeSzGUo%2Fupload%2F3974b9c80b678334df84e61af984345f.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
---

Topics: Node js, jsonwebtoken

In this article, we are going to talk about JSON web tokens and how they are used for authenticating your API endpoints.

### What are JSON web tokens?

JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.

JWT can be used in authorization and information exchange.

#### Prerequisite

You need to have at least some basic knowledge in the following:

Javascript

Node

MongoDB

Postman - for making HTTP requests

1. Create our project directory

You create the directory that will hold our project, then initialize our node project using npm init -y. This creates a package.json file, this file records the metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.

```js

 mkdir authentication-jwt
 cd authentication-jwt
 npm init -y

```

2. Install Dependencies

Let's install all the dependencies that we will need, express mongoose dotenv jsonwebtoken, this are all dependencies needed. You can install them using the following commands.

we shall use MongoDB for the database.

```js

 npm i express mongoose dotenv jsonwebtoken

```

3.Create directories and files

We are going to use the MVC architecture in our project. Let's create the directories. Also, we create an index.js file to act as our entry point

```js

 mkdir controllers model routes
 touch index.js

```

Here is how our project looks like

![project setup](https://cdn.hashnode.com/res/hashnode/image/upload/v1673617982457/503492c1-b305-4a29-8bda-e9fe77b0513a.png?auto=compress,format&format=webp)

4.Create the server and connect it to the database

Let's start with index.js, We create the server and connect it to our database MongoDB using mongoose.

```js
import express from "express";
import dotenv from "dotenv";
import auth from "./routes/authRoute.js";
import mongoose from "mongoose";

dotenv.config();

const PORT = 9000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/auth", auth);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server is running on port ${PORT} ...`)
    );
  })
  .catch((err) => console.log(err));
```

Before we start our server let us first create the .env file and
place our environmental variables there.

```js
MONGO_URI = //place you mongoDB connection string here
  PORT = 9000;
```

Before we start our server to see if it is running we have to write start
scripts in our package.json. Below is how to do it

```js

"scripts": {
 "start": "node index.js",
 "dev": "nodemon index.js"
}

```

We can now start our server with the npm run dev command.
If everything is okay, your terminal should look like this

```js

 [nodemon] restarting due to changes...
 [nodemon] starting `node index.js`
 Server is running on port 9000 ...

```

5.Create user mode and implement login and signup functionalities

We shall define our user schema which will help with signing up. Also, we create the signup and login functionalities by attaching a static function to our schema and then validate the user whose information will be stored in the database

note: passwords cannot be stored raw in the database.

This is the process that we will follow for the static sign-up function

- Get user input.

- Validate user input.

- Validate if the user already exists.

- Encrypt the user password.

- Create a user in our database.

In our sign-in static function, this will be the process

- Get user input.

- Validate user input.

- Validate if the user exists.

- Verify the user password against the password we saved earlier in our database.

```js
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export const AuthSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

//static signup method

AuthSchema.statics.signup = async function (full_name, email, password) {
  if (!full_name || !email || !password) {
    throw Error("Please fill in all fields");
  }

  const exists = await this.findOne({ email: email });

  if (exists) {
    throw Error("Email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const newUser = await this.create({
    full_name,
    email,
    password: hash,
  });

  return newUser;
};

//login method

AuthSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Please fill in all fields");
  }

  const exists = await this.findOne({ email: email });

  if (!exists) {
    throw Error("No user with this email");
  }

  const match = await bcrypt.compare(password, exists.password);
  //if no match
  if (!match) {
    throw Error("Incorrect password");
  }
  return exists;
};

const Auth = mongoose.model("Auth", AuthSchema);

export default Auth;
```

6. Create login and sign-up routes and add the controller functions

After we have created our login and sign-up functionalities let's create our routes. In the routes, folder create an authRoute.js file then add the following code

```js
import express from "express";
import { userLogin, userSignup } from "../controllers/auth.js";

const router = express.Router();

router.route("/login").post(userLogin);
router.route("/signup").post(userSignup);

export default router;
```

Let's navigate to the controller folder and add an authController.js file. Here is where we shall implement and sign our JSON web token. First, we have to add our secret key in our .env file, Create the token and sign it using our secret key

```js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Auth from "../model/authModel.js";

dotenv.config();

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "2d" });
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Auth.login(email, password);

    const token = createToken(user._id);

    res.status(200).json({ user, token, email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const userSignup = async (req, res) => {
  const { full_name, email, password } = req.body;

  try {
    const user = await Auth.signup(full_name, email, password);

    const token = createToken(user._id);

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
```

Now we can use postman to check if our server is running as expected. If you send a post request, This is the response you will receive.

![postman request](https://cdn.hashnode.com/res/hashnode/image/upload/v1673624107360/d218191e-c73a-4fc1-bb07-154f7ba1a549.png)

we can add a middleware function that will help us to add the token in the header so that during a log in a user will require a token to get authorized.

In the middleware, folder add the file middleware.js then add the following code snippet

```js
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const customAuth = token.length < 500;

  let decodedData;

  if (token && customAuth) {
    decodedData = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = decodedData._id;
  }
  next();
};

export default auth;
```

then update our routes to accept the middleware

```js
import auth from "../middleware/middleware.js";
router.route("/login").post(auth, userLogin);
router.route("/signup").post(auth, userSignup);
```

you will need to add the token in the authorization header to be able to access the API endpoints.

## Conclusion

There are many ways to achieve what we have done in this article. But you have seen how to authenticate your API endpoints with JWT

you can get the whole code on

https://github.com/abeloa3411/jwt-auth-tutorial

## Reference

jwt.io

Node.js
