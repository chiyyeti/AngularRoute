import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileComponent } from './mobile/mobile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
import { PriceComponent } from './price/price.component';
import { SpecificationsComponent } from './specifications/specifications.component';
import { UserGuard } from './Guard/user.guard';
import { ChildGuard } from './Guard/child.guard';
import { ExitGuard } from './Guard/exit.guard';
import { LoadGuard } from './Guard/load.guard';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    LoginComponent,
    RegisterComponent,
    ViewComponent,
    PriceComponent,
    SpecificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UserGuard,ChildGuard,ExitGuard,LoadGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
