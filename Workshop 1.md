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
This is a tricky one. This creates a class named `Hi` that has one method called `sayHi`. This method takes in an input called `name`. This method then `returns` a string that says `Hi *name inputted*`. Don't worry if all of that didn't make sense.

And that's it. That's pretty much all the JavaScript you really need to know to write your
first React application.

### Part 1: JSX

##### HTML

You've seen HTML before. It basically works like this: you have different tags, each
of which does something different, and these tags are nested. There are different
variations on tags, like self-closing, and they can have attributes. Here's an example of HTML that has all of these things:

```
<div class="container">
    <p>Hi there! Here's a picture of a dog!</p>
    <img src="images/dog.jpg" />
</div>
```

##### XML

A topic related to HTML XML. Very basically, it uses tags like HTML does, but they aren't predefined, and it's primary use is not to display data, like HTML, but to store it. Here's an example of an XML that stores the data for a car:

```
<car>
    <owner>John</owner>
    <age>3</age>
    <miles>300,000</miles>
</car>
```

If you take away one thing from what I just explained, think about it like this: HTML is for formatting, XML is for data. That's an oversimplification, but it'll do.

##### JSX

JSX combines the principles of HTML and XML to let you do cool things with your React application. It stands for JavaScript XML, and it lets you write
