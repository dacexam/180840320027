import { Component, OnInit } from '@angular/core';
import { isListLikeIterable } from '@angular/core/src/change_detection/change_detection_util';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-fb',
  templateUrl: './fb.component.html',
  styleUrls: ['./fb.component.css']
})
export class FbComponent{

  objList=[];
  Post='';
  Comments='';

  post(){

    const postObject = {

      'Post' : this.Post,
      'Like' : 0,
      'Dislike' : 0,
      'Comment' : [],
      'Datetime' : new Date().toLocaleTimeString()
    }
    
    this.objList.splice(0,0,postObject);

    this.Post='';
  }

  LikeCount(item){

    item.Like +=1;
  }

  DislikeCount(item){

    item.Dislike +=1;
  }

  deletepost(item){

    let index=item.post.indexOf(item);
    item.post.splice(index,1);
  }

  CommentHere(item){

    item.Comment.push(this.Comments);
    this.Comments='';

  }

  deletecom(item,item1){

    let index=item.Comment.indexOf(item1);
    item.Comment.splice(index,1);
  }

  edittext='';

  edit(item,item1){

    let index=item.Comment.indexOf(item1);
    item.Comment.splice(index,1,this.edittext);

  }
}

