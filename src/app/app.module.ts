import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './AddWallet/home.component';

import { LoginComponent } from './GetWallet/login.component';
import { DemoComponent } from './GetAllWallet/demo.component';
import { PipesPipe } from './pipes.pipe';
import {HttpClientModule} from '@angular/common/http';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { AddFundsComponent } from './add-funds/add-funds.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransferfundsComponent } from './transferfunds/transferfunds.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
 
    LoginComponent,
    DemoComponent,
    PipesPipe,
    DeleteComponent,
    UpdateComponent,
    AddFundsComponent,
    WithdrawComponent,
    TransferfundsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
