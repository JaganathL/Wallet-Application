import { Component } from '@angular/core';
import { BackendserviceService } from '../backendservice.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
    walletid=null;
    constructor(private backendservice: BackendserviceService){}
    onSubmit(){
      this.backendservice.deleteById(this.walletid).subscribe(
        {
          next:(data)=>{},
          error:()=>{},
          complete:()=>{}
        }
      )
    }
}
