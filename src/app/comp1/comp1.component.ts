import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  title = 'Angular';
  post = '';
  postList = [];
  comm = '';
  comment = [];
  editedPost = '';

  postHere(){
    const postObject = {};
    postObject['like'] = 0;
    postObject['dislike'] = 0;
    postObject['post'] = this.post;
    postObject['comment'] = this.comment;

    this.postList.splice(0, 0, postObject);
    this.post = '';
  }

  likeCount(item){
    item.like += 1;
  }

  dislikeCount(item){
    item.dislike += 1; 
  }

  editPost(item){
    item.post = this.editedPost;
    this.editedPost = '';
  }

  deleteP(item){
    let index = this.postList.indexOf(item);
    this.postList.splice(index,1);
  }

  commentHere(cont){
    const com1 = {};
    com1['comm'] = this.comm;
    this.comment.splice(0,0,com1);
    this.comm = '';
  }

}
