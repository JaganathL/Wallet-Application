import { Component } from '@angular/core';
import { BackendserviceService } from '../backendservice.service';
import { Wallet } from '../model/wallet.model';

@Component({
  selector: 'app-transferfunds',
  templateUrl: './transferfunds.component.html',
  styleUrls: ['./transferfunds.component.css']
})
export class TransferfundsComponent {
fromid=0;
toid=0;
amount=0;
wallet:Wallet=new Wallet();
msg: string = "";
errorMsg: string = "";
constructor(private backendservice: BackendserviceService){}
transferfunds(){
  this.backendservice.transferfunds(this.wallet,this.fromid,this.toid,this.amount).subscribe({
    next:(data)=>{
      this.msg= "Wallet transfer successfully";
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
