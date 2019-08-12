import React, { Component } from 'react';
// import { connect } from 'net';
import { connect } from 'react-redux'


class App extends Component {
  render() {
    return (
      <div>
         {this.props.num}
        <ConB/>

      </div>
    );
  }
}

class Bpp extends Component {
  render() {
    return (
      <div>
        <ConC/>
      </div>
    );
  }
}

class Cpp extends Component {
  render() {
    return (
      <div>

          <button onClick={this.props.onIMCClick}>Cpp에 있는 버튼 </button>
      </div>
    );
  }
}

//ation

const actionTo = (dispatch)=>{

  console.log("action call");
  
  return {


    onIMCClick:()=>{
      console.log("액션에서 IMC 콜됨");
      
      dispatch({type:"IMCClick"})
    }

    ,
    onDECClick:()=>{
      console.log("액션에서 DEC 콜됨");
      
      dispatch({type:"DECClick"})
    }

  }
}

export function reduce(state={num:10},action){  
  switch(action.type){
  //TO DO
  //--------------------------------------------------------------------------------------
    case "IMCClick":
      state={
        num:state.num + 1
      }
    console.log("리듀스 에서 IMC 콜됨!");
    return state
  //----------------------------------------------------------------------------
    case "DECClick":
      state = {
        num: state.num - 1
      }
      console.log("리듀스 에서 DEC 콜됨!");
       return state

  
    default:
       return state
  }
}

const stateTo = (state)=>{
  return {
     num:state.num
  }
}


const ConB = connect(
  stateTo,actionTo)(Bpp)

const ConC = connect(
    stateTo,actionTo)(Cpp)
  
  



export default connect(
  stateTo,null)(App)