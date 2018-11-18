import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
    title='FACEBOOK';
   post='';
   postlist=[];
   editedpost='';

   
   posthere()
     {
       const postobject={}
       postobject['post']=this.post;
       postobject['like']=0;
       postobject['dislike']=0;

       this.postlist.splice(0,0,postobject);
        this.post='';
      }

    likecount(item)
      {
        item.like +=1

      }

     dislikecount(item)
     {
       item.dislike+=1
     }

     deletepost(item)
     {
       this.postlist.slice(this.postlist.indexOf(item),1);
     }

     editpost(item)
       {
         item.post=this.editedpost;
         this.editedpost="";

       }

   
}


  