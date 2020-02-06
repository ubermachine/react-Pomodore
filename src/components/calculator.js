import React  from 'react'
let decflag1=0
let decflag2=0
let zerflag=0
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current:'',
            nextip:'',
            func:'',
            output:0
        }
            this.getInput=this.getInput.bind(this)
        
    
    }

    getInput(event){

        const numtest=/[\d]+/g
        const dec=/[.]/
        const functest=/[/*\-+]/

        if(numtest.test(event.target.innerHTML)){
            if(!this.state.func||this.state.func=="="){
            if((event.target.innerHTML==="0"  &&(this.state.output == "0"))){
            this.setState({
                current:parseFloat(this.state.current+event.target.innerHTML),
                output:parseFloat(this.state.current+event.target.innerHTML)

            })   
        }else{this.setState({
            current:this.state.current+event.target.innerHTML,
            output:(this.state.current+event.target.innerHTML)
        }) 
    }
    }
            else{if((event.target.innerHTML==="0" )&&(this.state.output == "0")){
                this.setState({
                    nextip:parseFloat(this.state.nextip+event.target.innerHTML),
                    output:parseFloat(this.state.nextip+event.target.innerHTML)
    
                }) 
            }else{this.setState({
                nextip:this.state.nextip+event.target.innerHTML,
                output:(this.state.nextip+event.target.innerHTML)
            })    
            }

            }              
                
        }else if(dec.test(event.target.innerHTML) && decflag1===0 &&(!this.state.func||this.state.func=="=")){
            decflag1=1
            this.setState({
                current:this.state.current+event.target.innerHTML,
                output:(this.state.current+event.target.innerHTML)
            })
        
            
        }else if(dec.test(event.target.innerHTML) && decflag2===0 ){
            decflag2=1
            this.setState({
                nextip:this.state.nextip+event.target.innerHTML,
                output:(this.state.nextip+event.target.innerHTML)
            })
        
            
        }else if(event.target.id==="clear"){
            this.setState({
                current:'',
                nextip:'',
                func:'',
                output:0
            })
            decflag1=0;
            decflag2=0;
        }
        else if(functest.test(event.target.innerHTML)&&!this.state.nextip){
           
            this.setState({
                func:event.target.innerHTML,
            }
            )
        
    }
    else if (event.target.innerHTML==="=" || (event.target.innerHTML!="." &&functest.test(event.target.innerHTML)&&this.state.nextip)){
        let a=parseFloat(this.state.current);
        let b=parseFloat(this.state.nextip);
        switch(this.state.func){
            case "*":
                this.setState({
                    output:a*b,
                    current:a*b,
                    nextip:'',
                    func:event.target.innerHTML
                    
                })
            break;
            case "/":
                this.setState({
                    output:a/b,
                    current:a/b,
                    nextip:'',
                    func:event.target.innerHTML
                    
                })
                break;
            case "+":
                this.setState({
                    output:a+b,
                    current:a+b,
                    nextip:'',
                    func:event.target.innerHTML
                    
                })
            break;
            case "-":
                this.setState({
                    output:a-b,
                    current:a-b,
                    nextip:'',
                    func:event.target.innerHTML
                   
                })
            break;
            default:                



        }
    }


    }
    render(){
        return (
            <div id="caldisplay">
            <button onClick={this.getInput} id="clear">C</button>
            <button id="equals" onClick={this.getInput}>=</button>
            <div id="display">{(this.state.output)}</div>
            <button onClick={this.getInput} id="one">1</button>
            <button onClick={this.getInput} id="two">2</button>
            <button  onClick={this.getInput} id="three">3</button>
            <button  onClick={this.getInput} id="four">4</button>
            <button  onClick={this.getInput} id="five">5</button>
            <button  onClick={this.getInput} id="six">6</button>
            <button  onClick={this.getInput} id="seven">7</button>
            <button  onClick={this.getInput} id="eight">8</button>
            <button  onClick={this.getInput} id="nine">9</button>
            <button  onClick={this.getInput} id="zero">0</button>
            <button  onClick={this.getInput} id="add">+</button>
            <button   onClick={this.getInput} id="subtract">-</button>
            <button   onClick={this.getInput} id="multiply">*</button>
            <button   onClick={this.getInput} id="divide">/</button>
            <button  onClick={this.getInput}  id="decimal">.</button>
            <button id="equals" onClick={this.getInput}>=</button>
            
            </div>
        )
    }
}




export default Calculator;

