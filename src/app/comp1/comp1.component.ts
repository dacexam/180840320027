import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component  {

  post='';
  postList=[];
  update1='';
  com='';
  com1='';
  posthere()
  {
    const obj={
      comm:[],
      'like':0,
      'dislike':0,
      'post':this.post,
      'com':this.com,
      'com1':this.com1
    };
if(this.post!=''){
    this.postList.splice(0,0,obj);
    this.post='';
}
  }

  like(ref){
    ref.like+=1;
  }

  dislike(ref){
    ref.dislike+=1;
  }

delete1(ref){
  let index=this.postList.indexOf(ref);
  this.postList.splice(index,1);
}

  update(ref){
    if(ref.update1!=''){
    ref.post=ref.update1;
    ref.update1='';
    }
  }

  comment(ref)
  {
    ref.comm.splice(0,0,this.com);
    this.com='';
  }
  commdel(ref,value){
    let index=ref.comm.indexOf(value);
    ref.comm.splice(index,1);

  }

  commup(ref,value){
    
    ref.comm.value=ref.comm.com1;
    ref.comm.com1='';
  }
}
