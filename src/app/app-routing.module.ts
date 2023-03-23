import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { DemoComponent } from './GetAllWallet/demo.component';
import { HomeComponent } from './AddWallet/home.component';
import { LoginComponent } from './GetWallet/login.component';

import { UpdateComponent } from './update/update.component';
import { AddFundsComponent } from './add-funds/add-funds.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransferfundsComponent } from './transferfunds/transferfunds.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  
 /* {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
 
  {path:'demo',component:DemoComponent},
  {path:'delete',component:DeleteComponent},
  {path:'update',component:UpdateComponent},git init
  {path:'addfunds',component:AddFundsComponent},
  {path:'withdraw',component:WithdrawComponent},
  {path:'transferfunds',component:TransferfundsComponent}*/
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path:'admin',component:AdminComponent,
    children:[
      
  {path:'login',component:LoginComponent},
 
  {path:'demo',component:DemoComponent},
  {path:'delete',component:DeleteComponent},
  {path:'update',component:UpdateComponent}
    ]
  },
  {
    path:'user',component:UserComponent,
   children: [
    {path:'home',component:HomeComponent},
    
      {path:'addfunds',component:AddFundsComponent},
  {path:'withdraw',component:WithdrawComponent},
  {path:'transferfunds',component:TransferfundsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
