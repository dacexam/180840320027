import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  constructor() { }
title='DACBOOK';
post='';
postList=[];
updatee='';
comments='';

postHere(){
  const postObject={
    'comment2':[],
'like': 0,
'post': this.post,
'dislike': 0,
'comments' : this.comments,
};


  if(this.post!=''){
  this.postList.splice(0,0,postObject);
  this.post='';
  }
  else
  {
    alert("Write something");
  }
}

likeCount(item){
  item.like+=1;
}

dislikeCount(item){
  item.dislike+=1;
}

delete1(item){
  let index=this.postList.indexOf(item);
  this.postList.splice(index,1);
}

update1(item){
  item.post=this.updatee;
  item.updatee='';
}

comment1(item){
  let val=item.comments;
  item.comment2.splice(0,0,val);
  item.comments='';
}

delcomment(item,value){
  let index =item.comment2.indexOf(value);
  item.comment2.splice(index,1);
}

}
