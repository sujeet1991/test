import React, { Component } from 'react';
import Chart from './chart';


import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      chartdata:[],
      updatechart:[],
      randomnumber:null,
      valuedata:[]

    }
   this.checkhandler= this.checkhandler.bind(this);
  }
  componentDidMount(){
    let dataset= this;
    fetch('Api.js').then(res=>res.json()).then(function(chartdata){
      dataset.setState({
        chartdata
      })
    })
  
    }
  // randomnumber(){
  //  setInterval(() => {
  //    let randomnumber=Math.floor(Math.random() * 10) + 500;
  //     this.setState({
  //       randomnumber
  //     })
  //   }, 2000)
  // }

 
 
  Newchartnumber=(amount,chartdata)=>{
   let array_push=[];
    let updatechart ={...chartdata};
    array_push.push(amount)
    
   console.log(array_push)
    //console.log(updatechart) 
      
    
  }
  checkhandler=(e,id)=>{
    console.log(id);
    let value= this.state.chartdata;
    for(var i=0;i<value.length;i++){
        if(id===value[i].id){
          let valuedata= value[i];
        
          this.setState({
            valuedata
          })
        }
    }
   // console.log(value);
   
    
  }

  render() {
   var data= null;
   if(this.state.valuedata.length!==0){
     data=<Chart  chartdata={this.state.valuedata}/>
   }

     return (
      <div className="container">
     
        <div className="col-md-12 tabel-responsive">
        <table className="table table-hover"> 
        <thead>
         <tr> 
            <th>#</th> 
            <th>Stock</th> 
            <th>Start</th> 
            <th>Data point</th>
            <th>Graph</th> 
          </tr> 
         </thead> 
         <tbody> 
         {
           this.state.chartdata.map((curr,index)=>{
             //console.log(curr)
             return (
              <tr key={index}> 
              <th scope="row"><input type="radio" name="radio" onChange={(e)=>this.checkhandler(e,curr.id)} defaultChecked={""} /></th> 
              <td>{curr.e}</td> 
              <td>{curr.l}</td> 
              <td>{curr.l_cur}</td> 
              
            </tr> 
             )
           })
         }
            
            
         <td>{data}</td>
            </tbody> 
</table>

        </div>
        
      </div>
    );
  }
}

export default App;
