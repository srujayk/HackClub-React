# React Workshop 1

**Prerequisities**: HTML and CSS

**What we're going to building**: A basic portfolio website

**What you'll learn in this workshop**: Basic JavaScript, JSX, React (components, props, and state)

### Part 1: Basic JavaScript

Here, I'm just going to list some commands in JavaScript that you'll need to know for this
tutorial.

`const x = 3;`  This declares a constant variable named `x` initialized with the value `3`

`let y = ["1", "2", "3"];`  This declares a mutable(you can change the values) array named `y` initialized with the string values `1, 2, and 3`

`export const z = "Hello";` This exports the variable `z` from the current JavaScript file, so that it can later be imported and used in another file.

`import { z } from './index.js';` This imports the variable `z` from above, assuming it was stored in a file called `index.js`. The `./` simply means that the file is in the same folder on your computer (or Repl.it) that the file you're working on is.

```
class Hi {    
    sayHi(name) {
        return "Hi ${name}";
    }
}
```
This creates a class named `Hi` that has one method called `sayHi`. This method takes in an input called `name`. This method then `returns` a string that says `Hi *name*`. Don't worry if all of that didn't make sense.

And that's it. That's pretty much all the JavaScript you really need to know to write your
first React application.

### Part 1: Setup

Let's set up your coding environment! Head over to [Repl.it](http://repl.it) and create an account or log in.

Then, create a new Repl and select **React** for the language; this will create your programming environment. On the right you'll see spaces for a command line, as well as a preview for your React application. Go ahead and hit **start** near the top of your workspace to preview a sample React app.

Before we move on, delete lines 3 and 4 from `index.js`, and delete the files `App.js` and `App.css` from the sidebar.

A brief explanation of the lines that are left:

```
import React from 'react';
import ReactDOM from 'react-dom';
```
These lines import the `React` and `ReactDOM` packages for you to use. They provide you with some necessary functions/classes we'll need.

```
ReactDOM.render(<App />, document.getElementById('root'));
```
This line is what passes the code you write from JavaScript onto your HTML page. The first input to the `ReactDOM.render` function is a piece of JSX that in this case is a component. (JSX and component will make sense to you in a bit) The second input is where on the HTML page your JSX will be shown, in this case an element with the id `root`. Unfortunately, we can't see the HTML file in Repl, so just imagine that the HTML file looks like this:

```
<!DOCTYPE html>
<html>
    <head>
        <title>Some random title</title>
        <link type="text\css" src="index.css" />
    </head>
    <body>
        <div id="root">
        </div>
    </body>
</html>
```

Don't worry if all of that didn't make sense, it will soon. Now you're ready to start coding!

### Part 2: JSX

##### HTML

You've seen HTML before. It basically works like this: you have different tags, each
of which does something different, and these tags are nested. There are different
variations on tags, like self-closing, and they can have attributes. Here's an example of HTML that has all of these things:

```
<div class="root">
    <p>Hi there! Here's a picture of a dog!</p>
    <img src="images/dog.jpg" />
</div>
```

##### JSX

Basically, JSX is HTML that you can write in your JavaScript code. For example, saying something like the following is allowed with JSX.

`const myHeader = <h1>Hello!</h1>;`

Being able to put HTML into our JavaScript is how we will be able to make templates in React.

#### **Exercise 1**

Let's try writing some JSX. In line 4, replace `<App />` with `<h1>Hi</h1>`, and let the page refresh. You now see a white page on the right that simply says Hi. Now you can somewhat understand what the `ReactDOM.render` function does, it puts the code from the first argument into the spot specified by the second.

Play around with it, adding different HTML elements into this first slot.


### Part 2: Components

React is all about components. Basically what a component is is a building block in your code. They are reusable elements, so you can create, for example, the structure for a button, one time, and make 50 buttons on your page.

Add the following code underneath the import statements, but above the `ReactDOM.render` call:

```
class Header extends React.Component {

}
```

This created an empty component called `Header`. Now, on line 7, replace `<h1>Hi</h1>` with `<Header />`. This is how you initialize a component: like an self-closing HTML tag, but with the component name as the tag name.

Unfortunately, our screen now gives us an error. This is because our component isn't complete yet: it's empty! Add the following lines in between the curly braces of your class:

```
render() {
    return <h1>Hi</hi>;
}
```

Every component requires a `render` method. 
