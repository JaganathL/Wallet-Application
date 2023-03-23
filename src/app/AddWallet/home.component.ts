import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 
import { BackendserviceService } from '../backendservice.service';
import { Wallet } from '../model/wallet.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
       
  static walletArray:Wallet[]=[];
  wallet:Wallet=new Wallet();
  msg: string = "";
  errorMsg: string = "";
  count=0;
   static k:boolean=false;
  constructor(private router:Router,private backendservice:BackendserviceService){}

  onSubmit(){
    console.log(HomeComponent.walletArray);
    HomeComponent.k=true;
   //this.walletArray[this.count]=this.wallet;
    //this.count++;
    this.backendservice.addEmployee(this.wallet);
    
    let empPost: Observable<any> =this.backendservice.addEmployee(this.wallet);
    empPost.subscribe(
      {
        next:(data)=>{ // executes when back end reposnds with success status code
          console.log(data);
          HomeComponent.walletArray.push(data);
          this.msg= "Wallet updated successfully";
          this.errorMsg= "";
        },
        error:(err)=>{ // executes when back end responds with error status code
          console.log(err.error);
          this.msg= "";
          this.errorMsg= JSON.stringify(err.error);
        },
        complete:()=>{ //
          console.log("Post request Completed...")
        }
      }
    )}
}

