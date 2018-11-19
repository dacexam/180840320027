import { Component, OnInit } from '@angular/core';
import { MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent  {

    title = 'FRIENDSHIP';
    title1 = 'Lets Be Friends...';
    username = 'James Bond';
    
    like = 0;
    dislike = 0;
    commentcount = 0;
    postList = [];
    post = '';
    comment = '';
    
    /** MEMBER FUNCTION */
    postHere() {
      if( this.post != ''){
        const postObject = {};
        postObject['like'] = 0;
        postObject['dislike'] = 0;
        postObject['post'] = this.post;
        postObject['commentsList'] = [];
        postObject['commentLike'] = 1;
        postObject['commentDisLike'] = 0;
        postObject['comment'] = "";
        this.postList.splice(0, 0, postObject);
        this.post = '';
      }
    }

    likeCount(item) {
      item.like += 1;
    }
    dislikeCount(item) {
      item.dislike += 1;
    }
    deletePost(item){
      let temp = this.postList.indexOf(item);
      this.postList.splice(temp,1);
    }
  
    commentHere(item){
      if( this.comment != ''){
        const commentObject = {};
        commentObject['commentLike'] = 0;
        commentObject['commentDisLike'] = 0;
        commentObject['comment'] = this.comment;
        item.commentsList.push(commentObject);
        this.comment = '';
    }
  }

  commentLikeCount(item1) {
    item1.commentLike += 1;
  }
  commentDisLikeCount(item1) {
    item1.commentDisLike += 1;
  }

  editComment(item1){    
  }     
  deleteComment(item,comment){
    let temp = item.commentsList.indexOf(comment);
    item.commentsList.splice(comment,1);
  }


}
