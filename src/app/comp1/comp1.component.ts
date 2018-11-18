import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component  {

   values = [];
   abcd ='';
   variable = '';
  constructor() { }

  posthere()
  {
    const node = {
       'data':this.abcd,
       'like':0,
       'dislike':0,
       'comcount':0,
       'comm':[]
    };

    this.values.splice(0,0,node);
    this.abcd = '';
  }
     

     comment(temp){
       temp.comm.splice(0,0,this.variable);
       this.variable = '';
       temp.comcount += 1;
        

     }

     deletecomm(temp){
       //let index = this.comm.indexOf(temp);
        //  this.comm.splice(index,1);
          

     }
     delete(temp){
          let index = this.values.indexOf(temp);
          this.values.splice(index,1);
          

     }
     edit(temp){
      
          




     }
     
     decreaselike(temp){
          temp.dislike += 1;

     }
     increaselike(temp){
         temp.like += 1;
     }

}
