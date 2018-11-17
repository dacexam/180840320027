import { Component, OnInit } from '@angular/core';
import { CommentStmt } from '@angular/compiler';

@Component({
  selector: 'app-cc1',
  templateUrl: './cc1.component.html',
  styleUrls: ['./cc1.component.css']
})
export class Cc1Component {

   postList=[];
   post='';

   postHere(){

    const postObject={};
    postObject['like']=0;
    postObject['dislike']=0;
    postObject['comment']=0;
    postObject['post']=this.post;

    this.postList.splice(0,0,postObject);
    this.post='';

    const postArray=[];
    //postArray['comments']='';
    const postObj={};
    postArray['comment']=0;
   } 

   likeCount(item){
     item.like+=1;
   }

   dislikeCount(item){
    item.dislike+=1;
  }

  deletePost(item){
    let i=this.postList.indexOf(item);
    this.postList.splice(i,1);
  }

  postComment(item){
  item.comment+=1;  
  let comm= item.comments;
  item.comments='';
  //const postObj={};
  //postObj['comments']=comm;
  //this.postList.postObj['comments']=comm;
  item.postArray.splice(0,0,comm);
  

  }
}
