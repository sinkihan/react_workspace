//rcc 기본 코드
//맨처음 프로젝트 만들면 
//rrc 캐가 메인 기본문 만들어주기

import React, { Component, Fragment } from 'react';
import './App.css'
import Bpp from './apple/bpp'//파일 분리 
import Cpp from './apple/cpp'

//클라스 이름  프롬   경로
class App extends Component {
  //함수 한번 맹글어보자
  // //방법1
  // f1() {
  //   console.log(1);

  // }
  // //방법2
  // f2 = function () {
  //   console.log(2);

  // }

  // //방법3 
  // f3 = () => {
  //   console.log(3);

  // }

  render() {
    //자바 스크립트 코드영역
    // const b = 'testB'
    // const st1 = {
    //   backgroundColor:'blue'
    // }
    // console.log('자바스크립트 출력');

    //자바 스크립트 코드영역

    return (
    <div>
      호랑이
      
      <Bpp></Bpp>
      <Cpp></Cpp>
      <Dpp name='호랑이 두마리'  age={30}></Dpp>
      {/* <button onClick={this.f2} > 버튼 </button>
         */}
        {/* 
        <div className='st'> 이름이름 </div>
        <div style={st1}> 123 </div>

        {b}
      
        <h1>  </h1>
        <br/>
        <h1>  </h1> 
        */}

      </div>
    );
  }
}

//디피피 인수 전달을 하고 싶다면??????
//

//props 누군가 이 클라스를 호출 할때 인자 를 넘겨 주려고 할때 사용하는 속성
class Dpp extends Component {
  render() {
    return (
      <div>
        <h1> 
            {this.props.name}
       </h1>
       
        
        <h1>{this.props.age+10}</h1>

      </div>
    );
  }
}


export default App;//한개만 익스포트 디폴트가 있어야 한다!! 없어도 안됨!!