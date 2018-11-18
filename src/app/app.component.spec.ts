import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  variable='';
  values=[];

  abcd='';
  
  posthere(){

   const node={
     'data': this.abcd,
     'like': 0,
     'dislike' : 0,
     'comcount':0,
      'comm':[]
   };

    this.values.splice(0,0,node);

    this.abcd='';

  }
 
  increaselike(temp){
    temp.like+=1;
  }

  dislike(temp){
    if(temp.data!='' ) 
    temp.dislike+=1;
  }


  del(temp){
    let index=this.values.indexOf(temp);
    this.values.splice(index,1);

  }

  
  }

}
