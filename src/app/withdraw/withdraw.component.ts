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
      },
      error:()=>{},
      complete:()=>{}
    })
  }
}
