import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component  {

  postlist=[];
  post='';
  comment='';    

 posthere(){
   if(this.post!=''){
 const postobject={};
 postobject['like']=0; 
 postobject['dislike']=0;
 postobject['post']=this.post;
 postobject['comment']=[];

 this.postlist.splice(0,0,postobject);
 this.post='';
   }
 }

   like(item){
   item.like +=1;
 }

   dislike(item){
   item.dislike +=1;
   }
  
   commenthere(item){ 
     if(this.comment!=''){
     item.comment.push(this.comment);
     this.comment='';
     }
   }

   deletepost(item)
     { 
        this.postlist.splice(this.postlist.indexOf(item),1);

     }
   
     editpost(item){
       item.post=this.post;
       this.post='';
     }  

     deletecomment(item)
     { 
        this.comment.splice(this.comment.indexOf(item),1);

     }
}
