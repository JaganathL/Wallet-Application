import { Component, Input } from '@angular/core';
import { HomeComponent } from '../AddWallet/home.component';
import { BackendserviceService } from '../backendservice.service';
import { Wallet } from '../model/wallet.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
       id:any=null;
       pass:any=null;
       t:boolean=false;
       m:boolean=HomeComponent.k;
      constructor(private backendservice:BackendserviceService){}
     arr:Wallet[]=HomeComponent.walletArray;
     
    //  wal:Wallet=new Wallet();
       onLogin(){
              this.backendservice.login(this.id,this.pass).subscribe({
                     next:(data)=>{
                            this.t=data;
                     },
                     error:()=>{},
                     complete:()=>{}
              })
        
       }
}
