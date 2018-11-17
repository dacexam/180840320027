import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  title= 'Aarohan 2k18';
  post='';
  postList=[];
  commentText='';
  commentList=[];
  
  postHere(){
    if(this.post===''){
      alert("Please write something to post...")
      return;
    }
    else{
    const postRef={
      'like':0,
      'dislike':0,
      'post':this.post,
      'addcomment':false,
      'editpost':false,
      'commentText':'',
      'commentList':[]
    };


    this.postList.splice(0,0,postRef);
    this.post='';
    }
  }

  postComment(item){
    if(item.addcomment===true){
      item.addcomment=false;
    }
    else
    {
      item.addcomment=true;
    }
  }

  addComment(item){
    if(item.commentText ===''){
      return;
    }
    else{
    const com=item.commentText;
    item.commentList.push(com);
    item.commentText='';
    }
  }

 
 deleteComment(item){
   item.commentList.splice(0,1);
 }

  edit(item){
    if(item.editpost===true){
      item.editpost=false;
    }
    else{
      item.editpost=true;
    }
  }

  editPost(item){
    item.editpost=false;  
  }
  

  likeCount(item){
    item.like += 1;
  }


  dislikeCount(item){
    item.dislike += 1;
  }


  deletepost(item){
   for(let i=0;i<this.postList.length;i++)
   {
     if(this.postList[i]==item)
     {
       this.postList.splice(i,1);
     }
   }
  }


}
