import { Component } from '@angular/core';
import { BackendserviceService } from '../backendservice.service';
import { Wallet } from '../model/wallet.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  walletid=null;
  wallet:Wallet=new Wallet();
  //wallet2:Wallet=new Wallet();
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
 // this.wallet2.id=this.wallet.id;

  update(){
    this.backendservice.updateById(this.wallet).subscribe(
      {
        next:(data)=>{
          this.wallet=data;
         // this.wallet2.id=this.wallet.id;
        //  this.wallet.name=this.wallet2.name;
        //  this.wallet.balance=this.wallet2.balance;
        },
        error:()=>{},
        complete:()=>{}
      }
    )
  }
}
