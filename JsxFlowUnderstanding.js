import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "Parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "h1-1" }, "Heading 1"),
    React.createElement("h1", { key: "h1-2" }, "Heading 2"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "h2-1" }, "Heading 1"),
    React.createElement("h1", { key: "h2-2" }, "Heading 2"),
  ]),
]);

const heading = React.createElement("h1", {}, "Hello World");
const headingJsx = <h1 className="heading1">Hello World</h1>;
const multiLineJsx = (
  <div className="multiLineDiv">
    <h1 className="heading1">Hello World From Sudeshna!</h1>
  </div>
);

console.log("heading", heading);
console.log("headingJsx", headingJsx);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(multiLineJsx);
