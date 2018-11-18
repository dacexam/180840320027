import { Component, OnInit } from '@angular/core';
import { IterableChangeRecord_ } from '@angular/core/src/change_detection/differs/default_iterable_differ';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent  {

  post= ' ';
  postlist=[];
  posthere()
  {
    const postobject={}
    postobject['like']=0;
    postobject['dislike']=0;
    postobject['post']=this.post;
    this.postlist.splice(0,0,postobject);

  }
  likecount(item)
  {
    item.like+=1;
  }
  dislikecount(item)
  {
    item.dislike+=1;
  }

  }


