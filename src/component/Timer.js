import React from 'react'
import './timer.css'
class Timer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            timer:0,
            hour:0,
            minute:0,
            second:0,
            isOn:false
        }
        setInterval(()=>{
          if(this.state.isOn){
        this.setState({
            timer:Math.floor(this.state.timer+1),
            hour:Math.floor(this.state.timer/3600),
            minute:Math.floor((this.state.timer%3600)/60),
            second:Math.floor((this.state.timer%3600)%60)
        }) }

        }, 1000);
        
    };
  
  
  
    StartTimer=()=> {
      this.setState ({isOn: ! (this.state.isOn)})
      }
      StopTimer=()=> {
        this.setState ({isOn: this.state.isOn})
      }
      ResetTimer=()=> {
        this.setState({ timer:0,second:0,minute:0,hour:0,isOn:false});
        clearInterval()
      }
    render(){
    return (
        <div>
         <h3>{String(this.state.hour).padStart(2,'0')}:{String(this.state.minute).padStart(2,'0')}:{String(this.state.second).padStart(2,'0')}</h3>
         <button className="start" onClick={this.StartTimer}>{this.state.isOn ? "Pause" : "Start"}</button>
         <button className="reset" onClick={this.ResetTimer}>reset</button>
        </div>
    )
    }
       
    
}
export default Timer