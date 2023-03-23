import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendserviceService } from '../backendservice.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
    walletid=null;
    msg: string = "";
    errorMsg: string = "";
    constructor(private backendservice: BackendserviceService){}
    onSubmit(){
      this.backendservice.deleteById(this.walletid).subscribe(
        {
          next:(data)=>{
            this.msg= "Wallet deleted successfully";
          this.errorMsg= "";
          },
          error:(err)=>{
            this.msg= "";
          this.errorMsg= JSON.stringify(err.error);
          },
          complete:()=>{}
        }
      )
    }
}
