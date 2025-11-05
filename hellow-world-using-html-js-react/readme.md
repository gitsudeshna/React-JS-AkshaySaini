======================================HTML======================================

1. Create Hello World Program using only HTML?

Using the "!" abbreviation, we can quickly expand it into a complete HTML boilerplate.

And inside the body tag we can add h1 tag or other tags also to show the "Hello world" text.

======================================JS======================================

2. Create Hello World Program using only JavaScript?1

document.createElement("h1")
→ Creates a new <h1> element in memory (not yet visible on the page).

heading.innerText = "Hello world from JS"
→ Sets the text inside that <h1> element.

document.getElementById("root")
→ Selects the <div id="root"></div> element from the HTML.

divElement.appendChild(heading)
→ Inserts the <h1> element into the div, making it appear on the web page.

======================================React======================================

3. Create Hello World Program using only React?

The <div id="root"> is the container where the React application will be rendered.
React will take control of this section and inject dynamic UI elements into it.

These two lines load React and ReactDOM libraries directly from a CDN.
1-react.development.js → Contains React’s core logic for creating elements and components.
2-react-dom.development.js → Allows React to interact with the browser’s DOM (Document Object Model).

The "crossorigin" attribute ensures resources can be fetched securely from an external server.

const heading = React.createElement(
"h1",
{ class: "heading" },
"Hello world from React"
);
React.createElement() is how React creates elements in pure JavaScript.
It has 3 arguments -
First argument: "h1" → the type of element to create.
Second argument: { class: "heading" } → the attributes or props (here, a CSS class).
Third argument: "Hello world from React" → the content or children inside the element.

This doesn’t directly create a DOM element — it creates a virtual representation of it (a React element).

Rendering to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

ReactDOM.createRoot(...) tells React to control the <div id="root">.
.render(heading) renders the React element (<h1>) inside that root.
React then converts its virtual representation into actual HTML in the browser.

NOTE: React will overwrite everything inside "root" and
replaces with whatever given inside render.

4. Do the below HTML code in React?

<div id="root">
  <div id="child1">
    <h1>Heading 1</h1>
    <h1>Heading 2</h1>
  </div>
  <div id="child2">
    <h1>Heading 1</h1>
    <h1>Heading 2</h1>
  </div>
</div>
