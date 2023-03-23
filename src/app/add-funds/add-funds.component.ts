import { Component } from '@angular/core';
import { BackendserviceService } from '../backendservice.service';
import { Wallet } from '../model/wallet.model';

@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.css']
})
export class AddFundsComponent {
  walletid=null;
  amount=0;
  wallet:Wallet=new Wallet();
  msg: string = "";
  errorMsg: string = "";
  constructor(private backendservice: BackendserviceService){}
  onSubmit(){
    this.backendservice.getWalletById(this.walletid).subscribe({
      next:(data)=>{
        this.wallet=data;
      },
      error:()=>{},
      complete:()=>{}
    })
  }
  addfunds(){
    this.backendservice.addfunds(this.wallet,this.amount).subscribe({
      next:(data)=>{
        this.wallet=data;
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
