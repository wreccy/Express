# Simple REST API using Express

### Create Node.js application

First open terminal/console, then initialize the Node.js application with package.json file:

```
npm init --y
```

Next, we need to install express modules:

```
npm install express --save
```

Next, open the package.json file and add `"type": "modules",` after description to use ECMAScript Modules :

```json
{
  "name": "express",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

### Setup Express web server

Now, in the root folder, we create a new file named index.js:

```javascript
// Import Express
import express from "express";

// Create an Express app
const app = express();

// Listen on port
app.listen(3000, () => console.log("Server Running at http://localhost:3000"));
```

### Create the Controller

Let's create controllers folder, then create page.controller.js file inside controllers folder:

```javascript
// Home page
export const Home = (req, res) => {
  res.send("Welcome to Home Page");
};

// About page
export const About = (req, res) => {
  res.send("Welcome to About Page");
};

// Contact page
export const Contact = (req, res) => {
  res.send("Welcome to Contact Page");
};
```

### Define Routes

Let's create routes folder, then create page.route.js file inside routes folder:

```javascript
// Import Express
import express from "express";

// Import page controller
import { Home, About, Contact } from "../controllers/page.controller.js";

// Init Express router
const router = express.Router();

// Home route
router.get("/", Home);

// About route
router.get("/about", About);

// Contact route
router.get("/contact", Contact);

// Export default router
export default router;
```

We also need to include routes in index.js (right before `app.listen()`):

```javascript
// Import Router
import Router from "./routes/page.route.js";

// Use Router
app.use(Router);

app.listen(...);
```

The index.js file should look like this:

```javascript
// Import Express
import express from "express";

// Import Router
import Router from "./routes/page.route.js";

// Create an Express app
const app = express();

// Use Router
app.use(Router);

// listen on port
app.listen(3000, () => console.log("Server Running at http://localhost:3000"));
```

Now let’s run the app with command: node index.js. <br />

Open your browser with url http://localhost:3000/, you will see: Welcome to Home Page <br />

Open your browser with url http://localhost:3000/about, you will see: Welcome to About Page <br />

Open your browser with url http://localhost:3000/contact, you will see: Welcome to Contact Page
