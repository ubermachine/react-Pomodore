import React  from 'react'

class Pomodoro extends React.Component{
    constructor(props){
        super(props);
        this.timer = 0;
        this.breakrun=0;
        this.handleClick=this.handleClick.bind(this)
        this.handleTimer=this.handleTimer.bind(this)
        this.countDown=this.countDown.bind(this)
        this.state={
            display:2,
            session:2,
            break:5,
            running:false,
            bruninng:0,


        }
    }
    handleClick(event){
        const incdec=/increment|decrement/
        if(event.target.id==="reset"){
        this.setState({
                    display:2,
                    session:25,
                    break:5,
                    running:false,
                    bruninng:0,
                })
                clearInterval(this.timer)
                 this.timer=false
        }

        if(incdec.test(event.target.id)&&!this.state.running){
        switch(event.target.id){
            case "break-increment":
                this.setState({
                    break:this.state.break<=59?(this.state.break + 1):this.state.break
                })
            break;
                case "break-decrement":
                    this.setState({
                        break:this.state.break>=2?(this.state.break - 1):this.state.break
                    })
                break;
                case "session-increment":
                    this.setState({
                        session:this.state.session<=59?(this.state.session + 1):this.state.session,
                        display:this.state.session<=59?(this.state.session + 1):this.state.session,
                    })
                break;
                case "session-decrement":
                    this.setState({
                        session:this.state.session >=2?(this.state.session - 1):this.state.session,
                        display:this.state.session<=59?(this.state.session - 1):this.state.session, 
                    })
                break;
            default:
                this.setState({
                    session:this.state.session,
                    break:this.state.break,

                })
        }
    }
     }
    
    handleTimer(event){
        this.setState({
            running:!this.state.running,
        })
        console.log(this.state.running)
        this.state.running?clearInterval(this.timer):this.timer=setInterval(this.countDown,1000)
        
        

    }
    countDown(){
 
        if(this.state.running){ 
        this.setState({
            display:this.state.display-1,
            bruninng:1

        }
        )}
        if(this.state.display===0){
            this.setState({
                display:this.state.break-1,
                
                
            })
            this.breakrun=1;
     
        }
        else if(this.state.display<=1&& this.breakrun==1){
            clearInterval(this.timer)
            this.timer=false
            this.setState({
                display:0,
                running:false
            })}

        console.log(this.timer);
        

}
    

    render(){
        return (
            <div id="clock">
                
                <button onClick={this.handleClick} id='break-label'>Break Length</button>
                <button  onClick={this.handleClick} id="session-label">Session Length</button>
                <button onClick={this.handleClick}  id="break-decrement">BD</button>
                <button onClick={this.handleClick}  id='session-decrement'>SD</button>

                <button  onClick={this.handleClick} id='break-increment'>BI</button>
                <button onClick={this.handleClick}  id='session-increment'>SI</button>
                <div id='break-length'>{this.state.break}</div>
                <div id='session-length'>{this.state.session}</div>
                <button  onClick={this.handleClick} id='timer-label'>Session</button>
                <div id='time-left'>{this.state.display}</div>
                <button onClick={this.handleTimer}  id='start_stop'>Play</button>
                <button  onClick={this.handleClick} id='reset'>R</button>

            
            </div>

        )
    }

}

export default Pomodoro;

