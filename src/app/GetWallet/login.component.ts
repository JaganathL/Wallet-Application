import { Component, OnInit } from '@angular/core';
import { BackendserviceService } from '../backendservice.service';
import { Wallet } from '../model/wallet.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  wallets:Wallet=new Wallet();
  walletid=null;
  msg: string = "";
  errorMsg: string = "";
  constructor(private backendservice: BackendserviceService){}
  ngOnInit(): void {
    
  }
  onSubmit(){
    this.backendservice.getWalletById(this.walletid).subscribe({
      next:(data)=>{
        this.wallets=data;
        this.msg= "Wallet updated successfully";
        this.errorMsg= "";
      },
      error:(err)=>{
        this.msg= "";
        this.errorMsg= JSON.stringify(err.error);
      },
      complete:()=>{}
    })

  }
}
