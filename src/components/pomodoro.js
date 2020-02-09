import React  from 'react'

const alarm = document.createElement('audio'); // A bell sound will play when the timer reaches 0
alarm.setAttribute("src", "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3");

class Pomodoro extends React.Component{
    constructor(props){
        super(props);
        this.timer = 0;
        this.sessionend=0;
        this.breaknotleft=0;
        this.handleClick=this.handleClick.bind(this)

        //this.handleTime=this.handleTime.bind(this)
 
        this.handleTimer=this.handleTimer.bind(this)
        this.countDown=this.countDown.bind(this)
        this.state={
            display:25*60,
            session:1.05*60,
            break:5*60,
            running:false,
            bruninng:0,
            sec:"0".padStart(2, '0'),
            min:25


        }
    }


    handleClick(event){
        const incdec=/increment|decrement/
        if(event.target.id==="reset"){
        this.setState({
                    display:25*60,
                    session:25*60,
                    min:25,
                    sec:"0".padStart(2, '0'),
 
                    break:5*60,
                    running:false,
                    bruninng:0,
                })
                clearInterval(this.timer)
                 this.timer=false
                 this.sessionend=0;
                 this.breaknotleft=0
        }

        if(incdec.test(event.target.id)&&!this.state.running){
        switch(event.target.id){
            case "break-increment":
                this.setState({
                    break:this.state.break<=3659?(this.state.break + 1):this.state.break
                })
            break;
                case "break-decrement":
                    this.setState({
                        break:this.state.break>=61?(this.state.break - 1):this.state.break
                    })
                break;
                case "session-increment":
                    this.setState({
                        session:this.state.session<=3659?(this.state.session + 1):this.state.session,
                        display:this.state.session<=3659?(this.state.session + 1):this.state.session,
                        
                    })
                break;
                case "session-decrement":
                    this.setState({
                        session:this.state.session >=61?(this.state.session - 1):this.state.session,
                        display:this.state.session>=61?(this.state.session - 1):this.state.session, 
                       

                    })
                break;
            default:
                this.setState({
                    session:this.state.session,
                    break:this.state.break,
                    min:this.state.session,

                })
        }
    }
     }
    
    handleTimer(event){
        this.setState(state=>({
            running:!state.running,
        }))

        this.state.running?clearInterval(this.timer):this.timer=setInterval(this.countDown,1000)
        
        

    }
    countDown(){
        
        this.setState(state=>({
            display:state.display>=1?state.display-1:this.state.display,
            min:Math.floor(state.display/60),
            sec:String(Math.floor(state.display%60)).padStart(2, '0')
        }))
        if (this.state.display==0 &&this.breaknotleft==0){
            this.setState(state=>({
                display:this.state.break,
                bruninng:1
            }))
            this.breaknotleft=1;

        }



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
                <div id='time-left'>{this.state.min}:{this.state.sec}</div>
                <button onClick={this.handleTimer}  id='start_stop'>Play</button>
                <button  onClick={this.handleClick} id='reset'>R</button>

            
            </div>

        )
    }

}

export default Pomodoro;

