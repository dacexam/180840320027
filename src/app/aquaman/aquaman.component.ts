import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-aquaman',
  templateUrl: './aquaman.component.html',
  styleUrls: ['./aquaman.component.css']
})
export class AquamanComponent {

post='';
postList=[];
Comments='';

postHere(){
      const postObject={ };
      postObject['like']=0;
      postObject['dislike']=0;
      postObject['post']=this.post;
      postObject['editItem']=0;
      postObject['deleteItem']=0;
      postObject['Comment']=[ ];

      this.postList.splice(0,0,postObject);
      this.post='';

}

likeCount(item){
  item.like +=1;
}

dislikeCount(item){
  item.dislike +=1;
}

editItem(item){
  item.post=this.post;
  this.post='';
}

deleteItem(item){
  this.postList.splice(this.postList.indexOf(item),1);
}

CommentHere(item){

  item.Comment.push(this.Comments);
  this.Comments=' ';
}

}
