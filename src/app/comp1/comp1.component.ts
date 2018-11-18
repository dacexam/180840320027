import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component  {

  title='MyProject';
   post='';
   postlist=[];

   postHere(item)
   {
      const postobj={};
      postobj['like']=0;
      postobj['dislike']=0;
      postobj['post']=this.post;
      this.postlist.splice(0,0,postobj);
      this.post='';
   }

   likeCount(item)
   {
     item.like +=1;
   }

   dislikeCount(item)
   {
     item.dislike +=1;
   }

   delete(item)
   {
     this.postlist.splice(this.postlist.indexOf(item),1);
   }

   }


