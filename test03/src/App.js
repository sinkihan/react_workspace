import React, { Component } from 'react';

class App extends Component {
state = {
  n1:"버튼",
  n2:"버튼"
}
count =0
  //웹 브라우저 상에 
f1=(e)=>{
  console.log('1번콜');
  this.setState({n2:this.state.n1})
/* 
  alert(this.state.n1) */
}
f2=()=>{
  console.log('2번콜');
  //웹에서 입력창 받는 함수
  //확인 버튼 누르면 입력값 반환
  //취소누르면 널버튼 반환
  console.log(prompt("입력","두번쨰 인자"))

}
f3=()=>{
  console.log('3번콜');

  //윈도우 컨펌 함수는 확인 취소 버튼에 대해서 
  //트루 펄스를 리턴함
  console.log(window.confirm("윈도우 컨펌")  );
  
  

//
}
f4=(e)=>{

  
  this.setState({n1:e.target.value})
}

  render() {
    return (
      <div>
        <input
          type= "text"
          name= "메세지" 
          placeholder= "적당한 문자열"
          onChange={this.f4}
        />
        <br></br>
        <button onClick={this.f1} >{this.state.n2}</button>
        <br></br>
  {/*       <button onClick={this.f2} >버튼2</button>
        <br></br>
        <button onClick={this.f3} >버튼3</button>
        <br></br>

        <button onClick={()=>{
                   alert("익명 함수 어럴트")
        }} >버튼4</button> */}

      </div>
    );
  }
}

export default App;