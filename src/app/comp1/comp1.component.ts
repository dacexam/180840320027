import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = "DACBOOK";
  postRef = '';
  postList = [];

  postMsg() {
    if (this.postRef.trim().length == 0) {
      alert("Post cannnot be empty!");
    } else {
      const post = {};
      post['data'] = this.postRef;
      post['likes'] = 0;
      post['dislikes'] = 0;

      post['editflag'] = false;
      post['editPostRef'] = this.postRef;

      post['commentcount'] = 0;
      post['commentList'] = [];
      post['commentRef'] = '';

      this.postList.splice(0, 0, post);
    }
    this.postRef = '';
  }

  like(obj) {
    obj['likes'] += 1;
  }

  dislike(obj) {
    obj['dislikes'] += 1;
  }

  edit(obj) {
    obj['editflag'] = true;
  }

  saveMsg(obj) {
    if (obj['editPostRef'].trim().length == 0) {
      alert("Post cannnot be empty!");
    } else {
      obj['data'] = obj['editPostRef'];
      obj['editflag'] = false;
    }
  }

  canceleditMsg(obj) {
    obj['editPostRef'] = obj['data'];
    obj['editflag'] = false;
  }

  delete(obj) {
    let i = this.postList.indexOf(obj);
    this.postList.splice(i, 1);
  }

  addcomment(obj) {
    if (obj.commentRef.trim().length == 0) {
      alert("Comment cannnot be empty!");
    } else {
      const comment = {
        data: obj.commentRef,
        editdata: obj.commentRef,
        editflag: false
      }

      obj['commentList'].push(comment);
      obj['commentcount'] += 1;
      obj['commentRef'] = '';
    }
  }

  editcomment(obj) {
    obj.editflag = true;
  }

  saveComment(obj) {
    if (obj.editdata.trim().length == 0) {
      alert("Comment cannnot be empty!");
    } else {
      obj['data'] = obj['editdata'];
      obj.editflag = false;
    }
  }

  canceleditComment(obj) {
    obj['editdata'] = obj['data'];
    obj.editflag = false;
  }

  deletecomment(obj1, obj2) {
    let i = obj2.commentList.indexOf(obj1);
    obj2.commentList.splice(i, 1);
    obj2['commentcount'] -= 1;
  }
}
