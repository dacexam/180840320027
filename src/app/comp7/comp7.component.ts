import { Component, OnInit } from '@angular/core';
import{ isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-comp7',
  templateUrl: './comp7.component.html',
  styleUrls: ['./comp7.component.css']
})
export class Comp7Component {
  title="Dacbook";
  post='';
  postlist=[];

  postthere() 
 {
   const postObject={};
   postObject['like']=0;
   postObject['dislike']=0;
   postObject['post']=this.post;
   this.postlist.splice(0,0,postObject);
   this.post='';
}

likecount(item)
{
  item.like +=1;
}

dislikecount(item)
{
  item.dislike +=1;
}
}
