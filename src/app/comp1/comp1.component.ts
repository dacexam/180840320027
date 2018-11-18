import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
title = 'Instagram';
postList=[];
  post='';
  comm='';

  postNow(){

    const postObject = {

      'post' : this.post,
      'like' : 0,
      'dislike' : 0,
      'comm' : '',
      'comment' : [],
      }
    
   if(this.post == '')
   {
     alert("Insert Message");
   }
   else{
    this.postList.splice(0,0,postObject);

   }
    
    this.post='';
  }

  likeCount(item){

    item.like +=1;
  }

  dislikeCount(item){

    item.dislike +=1;
  }

  commentHere(item){
    item.comment +=1;
    item.comment.push(this.comm);
    this.comm='';

  }

  edittext1='';

  editPost(item){

    let index=item.indexOf(item);
    item.splice(index,1,this.edittext1);
  }

  deletecom(item,item1){

    let index=item.comment.indexOf(item1);
    item.comment.splice(index,1);
  }
  
  edittext='';

  edit(item,item1){

    let index=item.comment.indexOf(item1);
    item.comment.splice(index,1,this.edittext);
  }
    delete(item){
    this.postList.splice(this.postList.indexOf(item),1);
}
}

