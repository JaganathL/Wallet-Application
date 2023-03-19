import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { BackendserviceService } from '../backendservice.service';
import { Wallet } from '../model/wallet.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  wallet:Wallet=new Wallet();

  constructor(private backendservice:BackendserviceService){}
  
  onSubmit(){
    console.log(this.wallet);
    this.backendservice.addEmployee(this.wallet);

    let empPost: Observable<any> =this.backendservice.addEmployee(this.wallet);
    empPost.subscribe(
      {
        next:(data)=>{ // executes when back end reposnds with success status code
          console.log(data);
        },
        error:(error)=>{ // executes when back end responds with error status code
          console.log(error);
        },
        complete:()=>{ //
          console.log("Post request Completed...")
        }
      }
    )}
}
