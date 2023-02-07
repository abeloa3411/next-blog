---
title: "Deploy nodejs apps on railway"
date: "Jan 17 2023"
rTime: "4 min"
publishedAt: "https://abelwanyonyi.hashnode.dev/"
tags: ["javascript", "node", "railaway", "deployment"]
exerpt: "In this article, I will show an alternative to Heroku. We will learn how to deploy a node express app to Railway which is free and also has an easy process to deploy your backend apps."
cover_image: "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/8bghKxNU1j0/upload/4f77127128bdf21472001a51835490f5.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
---

Heroku free tier was one of the best and most used for the deployment of backend apps. But the Heroku free tier ended last year.

If you want to host your static website for free, you can use netlify or even vercel, but when you want to deploy your backend app on a free platform, it is hard since the most popular place was Heroku.

In this article, I will show an alternative to Heroku. We will learn how to deploy a node express app to Railway which is free and also has an easy process to deploy your backend apps.

Let's start by creating a simple node and express server that we'll be deploying to the railway.

First, let's create the directories for our project

```js
mkdir deploy-to-railway
cd deploy-to-railway
```

We can now initialize our app using npm init -y command like below and install our dependencies and create our entry file. We will not require a lot of dependencies since we are only deploying a simple node express app.

```javascript
npm init -y
npm i express dotenv
touch index.js
```

At this point, our project should look like the diagram below.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1673969889408/2faf114d-9071-4a23-b312-02065f2295ee.png)

we can now open our index.js and write the code for our server.

```javascript
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("Hello there! Api is working");
});

app.listen(PORT, () => console.log(`Sever is running port ${PORT} ...`));
```

Let's update our environmental variables and our scripts. in our .env file we can add the PORT variable and set it to 5000. In our package.json we can add a start script like below.

```javascript
{
"start":"node index.js",
}
```

That's all we need. Open the terminal and write npm start. You should see, Server is running on port 5000.

We can push our code to GitHub and then continue with the deployment. we will not talk about pushing code to GitHub because we are not focusing on git and Git Hub. I hope you know how to push code to Git Hub.

### Deploying to railway from GitHub repository

Now that all things are ready we can start the deployment process. if you don't have the repo you can use this GitHub repo.

Now let's head to Railway and log in to our account if you don't have an account you can signup for free.

Railway provides different login methods, we will use GitHub

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1673971699106/b53a37fc-f839-49ab-bf57-67217577258d.png)

Once you have logged in you will be redirected to the dashboard below:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1673971967280/7a197273-da51-4e0f-accf-fc3efe67fc8a.png)

Select new project the button , Once you have clicked you will see the following screen.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1673972225044/4d2bb362-c42c-43d0-a831-b5a7c4f319e7.png)

You will be asked to choose if you want to give railway permission to access all repos or only selected ones. Choose all repositories and click install railway so it can be installed to your GitHub and give access to railway.

You will be redirected to the dashboard. Select deploy from GitHub repo like in the diagram below

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1673972572900/6122dbfa-0234-47a0-a402-21254d93b9d0.png)

You will be required to configure GitHub so ass to be able to see your repos like below

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1673972677151/c6630165-12d3-498e-87d2-b710664bcda1.png)

after you will see the following screen

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1673972798790/b0958af5-e850-435e-865f-6212d3dc65d1.png)

select the repo you want to deploy and before deploying add environmental variables, in our case we only have the port as the only environmental variable. Here is how to do it

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1673973123159/775b37cc-6fb6-44c2-9c4d-861fb60794b8.png)

The final part is to generate a domain or you can use a custom domain if you have one. Click generate domain like below:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1673973248168/7533c423-9cb4-43c4-be09-4cd10088269c.png)

Your domain will be generated and your API will be exposed to the public. You will be given your domain. here is mine:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1673973379199/b161924d-4bc7-4def-ac1b-393d1584a031.png)

If you open the domain in the browser here is what you will see

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1673973461923/dfb5ff0a-8811-487f-8712-d99608e444a8.png)

This means that we have successfully deployed our API to railway.

### conclusions

You have seen how to deploy your backend apps to railway for free. It is an easy process. There are other places to deploy your backend apps like cyclic and render. try yourself to understand more. Thank you

### references

railway.app
