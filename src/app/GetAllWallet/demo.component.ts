import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/Employee';
import { ServiceService } from '../service.service';
import { BackendserviceService } from '../backendservice.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Wallet } from '../model/wallet.model';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  wallets:Wallet[]=[];
  constructor(private serviceservice:ServiceService, private backendservice: BackendserviceService){}
  ngOnInit(): void {
    //this.employees=this.serviceservice.getAllEmployees();
    this.backendservice.getAllWallet().subscribe({
      next: (data) => {
        console.log(data);
        this.wallets = data;
      },
      error: (err) => {
        console.log(err);

      },
      complete: () => { }
    })
        
  
  }
  

}
