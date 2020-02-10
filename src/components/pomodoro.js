import React  from 'react'
import $ from 'jquery'

class Pomodoro extends React.Component{
    constructor(props){
        super(props);
        this.timer = 0;
        this.mybeep=0;
        this.sessionend=0;
        this.allend=0;
        this.breaknotleft=0;
        this.handleClick=this.handleClick.bind(this)
        this.handleTimer=this.handleTimer.bind(this)
        this.countDown=this.countDown.bind(this)
        this.state={
            display:1500,
            session:25,
            break:5,
            running:false,
            bruninng:0,
            sec:"0".padStart(2, '0'),
            min:25,
            mybeep:0,
            label:"Play"
            


        }
    }


    handleClick(event){
        const incdec=/increment|decrement/
        if(event.target.id==="reset"){
        this.setState({
                    display:1500,
                    session:25,
                    min:25,
                    sec:"0".padStart(2, '0'),
                    label:'Play',
 
                    break:5,
                    running:false,
                    bruninng:0,
                })
                $("#beep").trigger("pause")
                var aud = document.getElementById('beep');
                aud.currentTime=0
                
                clearInterval(this.timer)
                 this.timer=false

                 this.timer = 0;
                 this.mybeep=0;
                 this.sessionend=0;
                 this.allend=0;
                 this.breaknotleft=0;
        }

        if(incdec.test(event.target.id)&&!this.state.running){
            this.timer=1;
        switch(event.target.id){
            case "break-increment":
                this.setState({
                    break:(this.state.break<=59?(this.state.break + 1):this.state.break)
                })
            break;
                case "break-decrement":
                    this.setState({
                        break:(this.state.break>=2?(this.state.break - 1):this.state.break)
                    })
                break;
                case "session-increment":
                    this.setState({
                        session:this.state.session<=59?(this.state.session + 1):this.state.session,
                        display:this.state.session<=59?(this.state.session*60 + 60):this.state.session*60,
                        
                    })
                break;
                case "session-decrement":
                    this.setState({
                        session:this.state.session >=2?(this.state.session - 1):this.state.session,
                        display:this.state.session>=2?(this.state.session*60 - 60):this.state.session*60, 
                       

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
    componentDidUpdate(prevState){
            if(prevState.display !== this.state.display && this.timer==1){
                this.timer=0;
        this.setState({
            min:String(Math.floor(this.state.display/60)).padStart(2, '0'),
            sec:"0".padStart(2, '0')
        })
    }}
    
    handleTimer(state){
        this.setState(state=>({
            running:!state.running,
            label:"session on"
            
        }))
        if(this.state.running){
            this.sessionstarted=1;
        }

        this.state.running&&this.sessionstarted==1?clearInterval(this.timer):this.timer=setInterval(this.countDown,1000)
        
        

    }
    countDown(){
        
        this.setState(state=>({
            display:state.display>=1?state.display-1:state.display,


        }))

        this.setState(state=>({
            min:String(Math.floor(this.state.display/60)).padStart(2, '0'),
            sec:String(Math.floor(this.state.display%60)).padStart(2, '0'),
            
        }))

  
         if ((this.state.display==0 &&this.breaknotleft==0) &&(this.allend==0 && this.state.mybeep==1)){
            this.sessionend=1;
            this.breaknotleft=1;
            this.allend=1;
           
            this.setState(state=>({
                display:this.state.break*60,
                min:String(Math.floor(this.state.break)).padStart(2, '0'),
                bruninng:1,
                label:"break on",
                mybeep:0
            }))


        }
        else if ((this.state.display==0 && this.breaknotleft==1) && (this.allend==1 && this.state.mybeep==1)){
           

            this.setState(state=>({
                display:this.state.session*60,
                min:String(Math.floor(this.state.session)).padStart(2, '0'),
                bruninng:0,
                mybeep:0,
                label:"session on"
            }))
            
            this.breaknotleft=0;
            this.sessionend=0
            this.allend=0;

        }
        else if (this.state.display==0 && this.state.mybeep==0 ){
            
            $("#beep").trigger("play")
            
                    this.setState(state=>({
                        mybeep:1
                    }))

                
        }



    }

    

    render(){
        return (
            
            <div id="clock">
                <div class="title">Pomodore a day keeps laziness away
                </div>
                <div id="container">
                <audio  id='beep'  src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3" preload="auto" ></audio>
                <div class='labelbois'>
                <div  id='break-label'>Break<br/>
                <button onClick={this.handleClick}  id="break-decrement"><i class="fas fa-arrow-circle-down"></i></button>
                <button  onClick={this.handleClick} id='break-increment'><i class="fas fa-arrow-circle-up"></i></button>
                <div id='break-length'>{this.state.break}</div></div>
                <div id="session-label">Session<br/>
                <button onClick={this.handleClick}  id='session-decrement'><i class="fas fa-arrow-circle-down"></i></button>
                <button onClick={this.handleClick}  id='session-increment'><i class="fas fa-arrow-circle-up"></i></button>
                <div id='session-length'>{this.state.session}</div></div></div>
               <div class='timebois'>
                <div id='timer-label'>{this.state.label}</div>
               <div id='time-left'>{this.state.min}:{this.state.sec}</div></div>
                <button onClick={this.handleTimer}   id='start_stop'><i class="fas fa-play-circle"></i></button>
                <button  onClick={this.handleClick} id='reset'><i class="fas fa-redo"></i></button>

            </div>
            </div>

        )
    }

}

export default Pomodoro;

