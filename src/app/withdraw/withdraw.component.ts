import { Component } from '@angular/core';
import { BackendserviceService } from '../backendservice.service';
import { Wallet } from '../model/wallet.model';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {
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
  withdraw(){
    this.backendservice.withdraw(this.wallet,this.amount).subscribe({
      next:(data)=>{
        this.wallet=data;
        this.msg= "Wallet withdraw successfully";
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
