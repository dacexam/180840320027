import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycompo',
  templateUrl: './mycompo.component.html',
  styleUrls: ['./mycompo.component.css']
})
export class MycompoComponent{

 
  list = [];
  postmsg = '';
  comm = '';

  postText(){
    if(this.postmsg == '')
    {
      return;
    }
    const stObject ={};
 
    let pobject=[];
    pobject['like']=0;
    pobject ['dislike']=0;
    pobject ['postval']=this.postmsg;
    let comment=[];
    pobject ['comcount']=0;
    pobject ['comment']=comment;
    this.list.splice(0,0,pobject);
    this.postmsg='';
  }


  likeCount(item){
    item.like += 1;
  }

  dislikeCount(item){
    item.dislike += 1;
  }

  commenthere(item){
    item.comment.splice(0,0,this.comm);
    item.comcount += 1;
    this.comm='';
  }
  delete(item){
      let x=this.list.indexOf(item);
      this.list.splice(x,1);
    }   

}