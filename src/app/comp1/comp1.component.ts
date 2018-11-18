import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  title = 'DACBOOK';
  post = '';
  postlist = [];
   
  postdata() {
    if (this.post == '') {
      alert("post cant be empty!!");
    }
    else {
      const postobject = {};
      postobject['like'] = 0;
      postobject['dislike'] = 0;
      postobject['comment'] = 0;
      postobject['comments'] ='';
      postobject['comment'] = 0;
      postobject['Arraylist'] = [];
      postobject['post'] = this.post;
      this.postlist.splice(0, 0, postobject);
      this.post = '';
    }
  }
  deletepost(item) {
    let i = this.postlist.indexOf(item);
    this.postlist.splice(i, 1);
  }
  editpost(item) {
    item.post = this.post;
  }
  postcomment(item){
    if(item.comments==''){
      alert ("comment cant be empty");
    }
    else{
    item.comment+=1;
    let comm=item.comments;
    item.Arraylist.splice(0,0,comm);
     item.comments='';
  }}

  likecounter(item) {
    item.like += 1;
  }
  deletecomment(item1,item){

    item.comment-=1;
    let i = item.Arraylist.indexOf(item1);
    item.Arraylist.splice(i, 1);
  }
  editcomment(item1,item){
    if(item.comments==''){
      alert ("comment cant be empty");
    }
    else{
    let i = item.Arraylist.indexOf(item1);
    let comm=item.comments;
    item.Arraylist.splice(i, 1);
    item.Arraylist.splice(i,0,comm);
     item.comments='';
    }
  }

  dislikecounter(item) {
    item.dislike += 1;
  }
}
