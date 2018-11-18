import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent  {

  post='';
  postList=[];

  postHere(){
    if(this.post!=''){
      const postObject={};
      postObject['like']=0;
      postObject['dislike']=0;
      postObject['post']=this.post;

      postObject['comment']='';
      postObject['commentList']=[];
      this.postList.splice(0,0, postObject);
    }else{
      alert('empty');
    }
      this.post='';
  }


  commentHere(item){
      
        item.commentList.splice(0,0,item.comment);
        item.comment='';  
  }

  deleteComment(item,item1){
    item.commentList.splice(item.commentList.indexOf(item1),1);
  }

  likeCount(item){
//    console.log(item);
    item.like += 1;
  }

  
  dislikeCount(item){
    item.dislike += 1;
  }

  deletePost(item){

      let index=this.postList.indexOf(item);
    this.postList.splice(index,1);
  }

}
