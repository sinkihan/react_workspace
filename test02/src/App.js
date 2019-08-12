
import React, { Component } from 'react';

class App extends Component {
    state ={
      ar : ['호랑이','독수리','앵무새']
     ,temp_ar : []
    }

 
  render() {
/*     const ar=this.state.ar */
    const {ar} = this.state
    let br = this.state.ar.map((v,k)=>
    {
      return <li onDoubleClick = {()=>{

/* 강사님 코드

          let s =this.state.ar.slice(0,k)
          let e = this.state.ar.slice(k+1,this.state.ar.length)
          let r = s.concat(e)
          this.setState({ar:r}) */

          //내코드
/*         this.setState({ar:this.state.ar.slice(0,k).concat(this.state.ar.slice(k+1,this.state.ar.length))})
        this.setState({temp_ar:this.state.ar})
        
         */

   
  
     
        // this.setState({ar:this.state.ar.slice(0,k).concat(this.state.ar.slice(k+1,this.state.ar.length))})
        //콘켓대신 쓸수 있음
        this.setState({
          ar:[
          ...ar.slice(0,k),
          ...ar.slice(k+1,ar.length)],

        })

      }} key={k}>{v}</li>
    })

    return (
      <div>
        <ul>
          {br}
          <input type="text"
          name="animal"
          onChange={(e)=>{

            this.setState({temp_ar:ar.concat(e.target.value)})

          }}
          ></input>
          <button onClick={()=>{

                this.setState({ar:this.state.temp_ar})
          
          }} >추가</button>
          <button onClick={()=>{

                this.setState({ar:ar.slice(0,ar.length-1)})
                
          }} >삭제</button>
        </ul>
      </div>
    );
  }
}

export default App;