import React from "react"; //Also we can destructure - const {Component} from 'react'
import ChildComponent from "./ClildClassComponent";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // props
    console.log("constructor called in parent");
    this.state = {
      count: 0,
      count1: 2,
    };
  }
  componentDidMount() {
    console.log("componentDidMount called in parent");
    this.setState({
      count: this.state.count + 1,
    });
    // this.timer = setInterval(() => {
    //   console.log("timer called");
    // }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log("componentDidUpdate called - count:", this.state.count);
      // in functional only inside the dependency array i have to add, it will auto checks the value change then call the useEffect.
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    console.log("render called in parent");
    return (
      <div>
        <ChildComponent name={"child1"} />
        <ChildComponent name={"child2"} />
        <h1>{this.props.name}</h1>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              // state management
              count: this.state.count + 1,
              count1: this.state.count1 + 1, // multiple state
            });
          }}
        >
          Count
        </button>
      </div>
    );
  }
}

export default UserClass;

// Component life cycle - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

// steps of class component render -
// 1- constructor
// 2- render
// 3- componentDidMount() - To make API calls.

// page loads -> render(Shimmer) -> API -> render(Real data)
// React first builds the entire DOM tree for all components, then runs componentDidMount() for each component after the DOM is ready.

// React calls all constructors and renders first (virtual DOM building).
// Then after committing to the real DOM, it calls all componentDidMount() from top to bottom.
// As the className(component) is same, react will batch these files for optimization and after creating the DOM(update) it will go for next step componentDidMount()
// constructor -> render -> DOM update -> componentDidMount

// Life cycle method of class component - 3 steps
//1- Mounting phase consist of Two phases -
// ==============componentDidMount();============
// 1-RenderPhase 2-Commit Phase
// 1.1-RenderPhase
// constructor - render

// 1.2-Commit Phase
// Update DOM -> componentDidMount

// 2- Updating Phase - It consist of 2 phase (Render & Commit)
// ===========componentDidUpdate();=================

// 2.1 - Render phase -
// render
//  2.2 - COmmit phase -
// React updates DOM and refs -> componentDidUpdate();

// 3- Unmounting Phase - 1 phase
// 3.1 - Commit Phase
//  componentWillUnMount();

// Is useEffect and comonentDidMount or class life cycle method same?

// No

// UseEffect - If we wont put dependency array - after every render it will call the useEffect
// - If we put empty dependency array - At the initial render it will call the useEffect
// - If someData we add inside the dependency array - onChange that value the useEffect will call.

// But in class component life cycle -
// after construction it will go for render then DOM update and call the componentDidMount(), then here we call the APIs and then in the setState will update the value - On setState the react re-renders the component seo again it will render with the updated value. DOM manipulation and componentDidUpdate() method calls.

// - In classComponent how to update the Component
// there are 2 arguments prevProps, prevState . Which will Help to check the match.

// - componentDidUpdate(prevProps, prevState){
//   if(this.state.count !== prevState.count){

//   }
// }

// But in functional componenton dependency array only we direct add that value , onChange that it call the useEffect.

// ComponentWillUnmount() calls when will leave that page.

// So we can add setInterval in componentDisMount() and check on changing to other page, the setTimeInterval still calling. So on compoentWillUnmount(), we have to clear everything.

// e.g. -
// componentDidMount(){
//   this.timer = setInterval(()=>{
//     console.log('called the set interval in component did mount')
//   }, 1000)
// }
// componentWillUnmount(){
//   clearInterval(this.timer);
//   console.log('component will unmount');
// }

//  In functional component - to clear the things of a component on navigation to other pages, we have to add return inside the useEffect.
//  e.g. -
//  useEffect(()=>{
//   console.log('use effect called');
//   return()=>{
//     console.log('useEffect cleared');
//   }
//  })
