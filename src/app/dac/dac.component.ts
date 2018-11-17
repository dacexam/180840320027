import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dac',
  templateUrl: './dac.component.html',
  styleUrls: ['./dac.component.css']
})
export class DacComponent {

  title = 'DACBOOK';
  post = '';
  postList = [];
  update1='';
  com2='';
  edit1 ='';
  
  /** MEMBER FUNCTION */
  postHere() {

   
    const obj={
      'comm' : [],
      'like' : 0,
      'dislike' : 0,
      'post' : this.post,
      'com2' : this.com2
    };
    if(this.post!='')
    {
    this.postList.splice(0,0,obj);
    this.post='';
    }
  
  }
update2(ref){
  
ref.post=ref.update1;
ref.update1='';

}
  delete(item){
    let index=this.postList.indexOf(item)
    this.postList.splice(index,1);
  }


  likeCount(item) {
    item.like += 1;
  }

  dislikeCount(item) {
    item.dislike += 1;
  }
  comm(ref)
  {
    ref.comm.splice(0,0,this.com2)
    this.com2='';
  }

  commdel(ref,value)
  {
       let index=ref.comm.indexOf(value);
       ref.comm.splice(index,1);
  }
  commedit2(ref,value)
  {
    ref.post=ref.edit1;
    ref.edit1='';
    
  }
}

