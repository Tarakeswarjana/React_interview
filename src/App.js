//import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import Counter from "./component2/Counter";
// import Useeffect from './component/Useeffect';
// import Useref from './component/Useref';
// import Parent from './component/Parent';
//import Conditionalrendaring from './component/Conditionalrendaring';
// import Child from './Child'
// import Event_binding from './component/Event_binding'
// import Style from './component/Style';
// import Form from './component/Form';
//  import Usestate from './component/Usestate';
import Usereducer from "./component/Usereducer";
import Usecallback from "./component/Usecallback";
// import Usememo from './component/Usememo';
import Hoc_red from "./component2/Hoc_red";
import Usememo2 from "./component2/Usememo2";
import Reducer1 from "./component2/Reducer1";
import Usememo3 from "./component/Usememo3";
import Testingcomp from "./component2/Testingcomp";
import Purecomponent from "./component2/Purecomponent";
import FormComponent from "./component2/FormComponent";
import Example2 from "./component2/Example2";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>from app.js </h2>
        {/* <Conditionalrendaring/> */}
        {/* <Event_binding/> */}
        {/* <Style/> */}
        {/* <Form/> */}
        {/* <Parent/> */}
        {/* <Usestate/> */}
        {/* <Usereducer />
        <Testingcomp /> */}
        {/* <Usecallback /> */}
        {/* <Usememo/> */}
        {/* <Useref/> */}
        {/* <Useeffect/> */}
        {/* <Usememo2/> */}
        <Counter />
        <FormComponent />

        <Example2 />

        {/* <Reducer1 /> */}
        {/* <Usememo3 /> */}

        {/* <Purecomponent /> */}

        {/* <Hoc_red cmp={<Counter/>} style={"red"}/>
     <Hoc_red cmp={<Counter/>} style={"green"}/>
     <Hoc_red cmp={<Counter/>} style={"yellow"}/> */}
      </div>
    );
  }
}

export default App;
