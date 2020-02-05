import React  from 'react'
let decflag=0;
let zerflag=0;
let funcflag=0;
let stater=0;
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
        const numtest=/[\d]/
        const dec=/[.+]/
        const functest=/[/*\-+]/
        const zertest=/^0/
        if(numtest.test(event.target.innerHTML)){
            if(!this.state.func){
                this.setState({
                current:this.state.current+event.target.innerHTML,
                output:parseFloat(this.state.current+event.target.innerHTML)
            })
            stater=1;
        }else{
            this.setState({
                nextip:this.state.nextip+event.target.innerHTML,
                output:parseFloat(this.state.nextip+event.target.innerHTML)
            })
            stater=2
            
        }          
        }else if(dec.test(event.target.innerHTML) && decflag==0 && this.state.current.length>0){
            decflag=1
            this.setState({
                current:this.state.current+event.target.innerHTML,
                output:parseFloat(this.state.current+event.target.innerHTML)
            })
        
            
        }else if(functest.test(event.target.innerHTML)){

            this.setState({
                func:event.target.innerHTML})
        
    }else if(event.target.id=="equals"){
        let a=parseFloat(this.state.current)
        let b=parseFloat(this.state.nextip)

        switch(this.state.func){
            case '*':
                this.setState({
                    output:a*b,

                })
                break;
            default:

        }

    
}else if(event.target.innerHTML=='C'){
        this.setState({
            current:'',
            nextip:'',
            func:'',
            output:0
        })
        dec=0

        
    }

    }
    render(){
        return (
            <div id="caldisplay">
            <button onClick={this.getInput} id="clear">C</button>
            <button id="equals" onClick={this.getInput}>=</button>
            <div id="display">{(this.state.current)}d{(this.state.nextip)}d{(this.state.output)}</div>
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

