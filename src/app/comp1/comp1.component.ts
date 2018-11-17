import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component  {

  title='DacBook';
  post='';
  List=[];
  edit='';
  comment='';
  commentarr=[];

  posthere(){
    const postObj={};
    postObj['like']=0 ;
    postObj['dislike']=0;
    postObj['post']=this.post;

    this.List.splice(0,0,postObj);
    this.post='';

    
  }

  likecnt(i){
    i.like=1+i.like;
  }
  
  

  dislikecnt(i){
    i.dislike=1+i.dislike;
  }

  del(i){
    this.List.splice(this.List.indexOf(i),1);
 }

  editit(i){
    this.post=this.edit;
    this.edit='';
  }

  commenthere(i1){
    this.commentarr[i1]=this.comment;
    this.comment='';

  }

  delcmt(i1){

  }
  editcmt(i1){
    
  }

}
