import { Component, OnInit } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

    title='DACBOOK'
    post='';
    edit='';
    editcomm='';
    comment='';
    postList=[];

    postHere(){

      let postobj={

        'post':this.post,
        'like':0,
        'dislike':0,
        'comment':[],
      
        
        
      
      
  
      };
      this.postList.splice(0,0,postobj);
      this.post="";
      
      if(this.post=='')
      {
          return;
      }
      else{
    
       
        this.post="";
      }

      if(this.edit=='')
      {
        return;
      }
      else
      {

      }

      if(this.editcomm=='')
    {
        return;
    }
    else
    {
    
    }

    if(this.comment=='')
    {
        return;
    }
  }
  
      like(ref){
        ref.like+=1;
      }

      dislike(ref)
      {
        ref.dislike+=1;
      }
      delete(ref)
      {

      }
     
    
  constructor() { }

  ngOnInit() {
  }

}
