import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
   AdminId=101;
  AdminName:string="admin";
     id=null;
     name="";
     t:boolean=false;
     s:boolean=true;
     onSubmit(){
    if(this.AdminId==this.id){
            if(this.AdminName==this.name){
              this.t=true;
              this.s=false;
            }
    }
     }
}
