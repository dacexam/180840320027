import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  title = 'DacBook';
  post = '';
  postList = [];

  h = new Date().getHours();
  m = new Date().getMinutes();
  s = new Date().getSeconds();

  newPost() {
    if (this.post != '') {
      let postObj = {
        post: this.post,
        like: 0,
        dislike: 0,
        comment: '',
        comments: [],
        editedpost: '',
      }
      this.postList.splice(0, 0, postObj);
      this.post = '';
    } else {
      alert("Post box is empty");
    }
  }

  editPost(i){
    if(i.editedPost != '')
    {
      i.post = i.editedPost ;
      i.editedPost = '';
    }    
  }

  likePost(i){
    i.like++;
  }

  dislikePost(i){
    i.dislike++;
  }

  deletePost(i){
    this.postList.splice(this.postList.indexOf(i),1);
  }

  newComment(i){
    if(i.comment!=''){
      let commentObj = {
        comment : i.comment,
        like : 0 ,
        dislike : 0,
        editedComment : ''
      }
  
      i.comments.push(commentObj);
      i.comment = '';
    }else{
      alert("Comment Box is empty");
    }
  }

  deleteComment(i,commentObj){
    i.comments.splice(i.comments.indexOf(commentObj),1);
  }

  editComment(i,commentObj){
    if(commentObj.editedcomment!=''){
      commentObj.comment = commentObj.editedComment;
      commentObj.editedComment = '';
    }
   }

  likeComment(commentObj){
    commentObj.like++;
  }
  dislikeComment(commentObj){
    commentObj.dislike++;
  }
  

  constructor() { }

  ngOnInit() {
  }

}
