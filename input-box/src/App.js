
import React, { Component, Fragment } from 'react'
import './App.css'
import { SketchPicker } from 'react-color';
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color:"red",
      size:"20",
      error:false,
      errorMsg:""
         
    }

    this.boxstyle ={
      color:this.state.color
    }
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);

  

  }


  handleChangeSize(event) {
    const re = /^[0-9\b]+$/;

 
    if(event.target.value > 300 || event.target.value < 20){
      this.setState({error:true,errorMsg:"Please Enter a number in range 20-300"})
    } else if ( !re.test(event.target.value)) {
      this.setState({error:true,errorMsg:"Please Dont Enter letter, Enter a number in range 20-300"})
   }
    else{
      this.setState({size: event.target.value, error:false, errorMsg:""});
    }
   
  }

  handleChangeColor(event) {
    this.setState({color: event.target.value});
  }


  handleChangeComplete = (color) => {
    this.setState({ color: color.hex });
  };


  render() {
    return (
      <Fragment>
      <div className='form-container'>
      <h1>
          Create a Box !
      </h1>

      <form >
    
    
          <div className="from-group">
          <label htmlFor="email">Size</label>
          <input type='text'  placeholder="enter size in number, default 20" size={this.state.size} onChange={this.handleChangeSize} required />
    
          </div>
    
          <div className="from-group">
          <label htmlFor="password">Color</label>
        
      <SketchPicker
        color={ this.state.color }
        onChangeComplete={ this.handleChangeComplete }
      />
          </div>
       
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />

      <br />
      
    
     {this.state.error? <h1 style={{color:"red"}}>{this.state.errorMsg}</h1>:
     <div style={{backgroundColor:this.state.color,height:this.state.size+"px", width:this.state.size+"px"}}> 
      im a box
      </div>  }
     
    
 
      
      </div>
      </Fragment>
    )
  }
}
