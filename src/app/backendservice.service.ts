import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wallet } from './model/wallet.model';

@Injectable({
  providedIn: 'root'
})
export class BackendserviceService {

  constructor(private httpClient:HttpClient) { }

  addEmployee(newWallet:Wallet):Observable<any>{
    let url:string = "http://localhost:8090/wallet";
    return this.httpClient.post(url,newWallet,{responseType:'json'});
  }
  getAllWallet():Observable<any>{
    let url:string="http://localhost:8090/wallet";
    return this.httpClient.get(url,{responseType:'json'});
  }
  getWalletById(id:string|null):Observable<any>{
    return this.httpClient.get("http://localhost:8090/wallet/"+id);
  }
  deleteById(id:string|null):Observable<any>{
    return this.httpClient.delete("http://localhost:8090/wallet/"+id);
  }

  updateById( wallet:Wallet):Observable<any>{
    return this.httpClient.put("http://localhost:8090/wallet/",wallet);
  }
  addfunds(wallet:Wallet,amount:number):Observable<any>{
    let url:string = "http://localhost:8090/wallet/"+wallet.id+"/"+amount;
    return this.httpClient.patch(url,wallet);
  }
  withdraw(wallet:Wallet,amount:number):Observable<any>{
    let url:string = "http://localhost:8090/wallet/withdraw/"+wallet.id+"/"+amount;
    return this.httpClient.put(url,wallet);
  }
  transferfunds(wallet:Wallet,fid:number,tid:number,amount:number):Observable<any>{
    let url:string = "http://localhost:8090/wallet/"+fid+"/"+tid+"/"+amount;
    return this.httpClient.put(url,wallet);
   }
   login(id:number,pass:string):Observable<any>{
    return this.httpClient.get("http://localhost:8090/wallet/login/"+id+"/"+pass);
   }

}
