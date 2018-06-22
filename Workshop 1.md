# React Workshop 1

**Prerequisites**: HTML and CSS

**What we're going to building**: A basic portfolio website

**What you'll learn in this workshop**: Basic JavaScript, React (JSX, components, props, and state)

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

Before we move on, delete line 4 from `index.js`, and delete the files `App.js` and `App.css` from the sidebar.

A brief explanation of the lines that are left:

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
```
These lines import the `React` and `ReactDOM` packages for you to use. They provide you with some necessary functions/classes we'll need. It also imports the CSS file that will be used in your project.

```
ReactDOM.render(<App />, document.getElementById('root'));
```
This line is what passes the code you write from JavaScript onto your HTML page. The first input to the `ReactDOM.render` function is a piece of JSX that in this case is a component. (JSX and component will make sense to you in a bit) The second input is where on the HTML page your JSX will be shown, in this case an element with the id `root`. Unfortunately, we can't see the HTML file in Repl, so just imagine that the HTML file looks like this:

```
<!DOCTYPE html>
<html>
    <head>
        <title>Some random title</title>
        <link type="text\css" href="index.css" />
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
    return <h1>Hi</h1>;
}
```

Every component requires a `render` method. When the component is initialized (using `<Header />`), the component class's `render` method is automatically called, and whatever is returned is passed into the `ReactDOM.render` method's first input as JSX.

React's key feature is that components are reusable. Now that you've created this `Header` component, we should be able to reuse it super easily. Below the `Header` component, but above the `ReactDOM.render` call, add the following lines:

```
const multiHeaders = (<div>
                        <Header />
                        <Header />
                    </div>);
```

Note the parentheses around the JSX. This is good practice whenever you are writing JSX that spans multiple lines, and is also required whenever you write multi-line JSX in the `return` statement of a component's `render` method.

Now, change the first input to `ReactDOM.render` to this variable, `multiHeaders`, and watch the page reload. Now there are two headers, without having to write `<h1>Hi</h1>` over again! In this case, it wasn't much code that we avoided, but imagine having to repeat 100s of lines of code. Components are really powerful.

#### **Exercise 2**

Delete the `multiHeaders` variable we created before.

Then, create a new component called `Profile`. Follow the structure of the `Header` component, and in the `return` line of the `render` function, add 3 elements: the `Header` component we had before, a `p` (paragraph) tag with a brief summary of yourself, and an `img` (image) tag with a picture of a funny/cool picture from Google Images.

Before that, one quick thing. First of all, remember that any multi-line JSX statements that go in this `return` statement must be enclosed with parentheses. Also, In order to have multiple lines of JSX, all of it must be enclosed within one single parent tag. So, once you've created all 3 of the elements above (`Header`, `p`, and `img`), place them inside a `div` that encloses all 3.

Finally, change the first input to the `ReactDOM.render` method to initialize this new `Profile` component.

---
***Stuck?***

Your code should look something like this:
```
class SomeComponent extends React.Component {
    render() {
        return (<div>
                    <Header />
                    <p>This is a paragraph.</p>
                    ...
                </div>);
    }
}

ReactDOM.render(<SomeComponent />, ...);
```
That's not all of it, but it's enough to get you started. If you're having trouble using the `img` tag, Google can definitely help.

---

Great! We now have a page with an image, a paragraph, and a header. One problem: it doesn't look great. Head over to the `index.css` file, and let's make this look better.

Let's make our `h1` and `p` center-justified, and our `img` to have a width of 50%. To center the image, add the following properties under the `img` tag in the CSS:

```
display: block;
margin-left: auto;
margin-right: auto;
```
Feel free to add any more stylish things you want before we move onto the next section.

### Part 3: props

Props is short for properties, and it allows you to pass inputs into your components. Components wouldn't be as useful if you just had the same code over and over. The way we'd pass inputs into a component is the same way you use attributes in HTML.

For example, lets say we wanted to modify our `Header` component to say "Hi, *name inputted*!". We would pass a *prop* into our `Header` component by setting an attribute of `name` when we instantiate it. The code would look like this:

```
<Header name="your name" />
```

Then, to use this inputted name in our `Header` component, we would modify it to look like this:

```
class Header extends React.Component {
  render() {
    return <h1>Hi, {this.props.name}</h1>;
  }
}
```
`this.props.name` is how we refer to a `prop` of `this` component that is called `name`. This is JavaScript Object Notation, if you've heard of that before. Don't worry if you haven't.

The reason for the curly braces around it is this is how we use JavaScript code within our JSX. For example, if we typed something like `<h1>I am 1 + 16 years old.</h1>` in JSX, it would display as ***I am 1 + 16 years old***. But, by placing the curly braces around the `{1 + 16}` (making the code `<h1>I am {1 + 16} years old.</h1>`), it would display as ***I am 17 years old.***

#### **Exercise 3**

Let's practice using props by making a new component called `Hobby`.

`Hobby` should follow the same structure as `Header`, but it should have two props, `category` and `list`. These will later be used for taking in the `Hobby`'s category, and the list of actually hobbies in that category.

Use both of these props in a single line, in the format "`category`: `list`", with the `category` in bold. For example, "**Sports**: football, basketball".

Then, in your `Profile` component, add `<h3>My Hobbies</h3>` underneath the paragraph from before. (You might want to center this in `index.css`).

After that, make 3 new `Hobby` elements underneath your "My Hobbies" heading , with the two props from above. `category` should be a single word string, and `list` should be a single string with each hobby name separated by commas.

Remember the rule about multi-line JSX `return` statements from before, and the `strong` tag in HTML might come in handy.

---
***Stuck?***

Your code for `Hobby` should look something like this:
```
class SomeComponent extends React.Component {
  render() {
    return (<div>
              <p><strong>{this.props.firstProp}</strong>: this.props.secondProp}</p>
            </div>);
  }
}
```
And to instantiate it in `Profile`, think along the lines of `<SomeComponent firstProp="..." secondProp="..." />`.

---

Great! Now we know how to pass properties into our components to make them more useful.

### Part 4: state
