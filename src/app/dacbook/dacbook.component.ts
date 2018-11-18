import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dacbook',
  templateUrl: './dacbook.component.html',
  styleUrls: ['./dacbook.component.css']
})
export class DacbookComponent  {
 title="DACBOOK";
 post='';
 postList=[];
 comment='';
   postHere()
   {
     if(this.post!='')
     {
     const postObject={};
     postObject['like'] = 0;
     postObject['dislike']=0;
     postObject['post']=this.post;
     postObject['commentList']=[];
     this.postList.splice(0,0,postObject);
     this.post='';
     }
   }
   commentPost(item)
    {
      if(this.comment!='')
      {
      const index=this.postList.indexOf(item);
      item.commentList.splice(index,0,this.comment);
      this.comment='';
      }

    }
    likeCount(item)
    {
      item.like+=1;
    }
    dislikeCount(item)
    {
      item.dislike+=1;
    }
    deletePost(item)
    {
      let index=this.postList.indexOf(item);
      this.postList.splice(index,1);
    }
    deleteComment(item,j)
    {
      let index=item.commentList.indexOf(j);
      item.commentList.splice(index,1);
    }

}
