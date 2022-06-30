import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildGuard } from './Guard/child.guard';
import { ExitGuard } from './Guard/exit.guard';
import { LoadGuard } from './Guard/load.guard';
import { ResolveGuard } from './Guard/resolve.guard';
import { UserGuard } from './Guard/user.guard';
import { LoginComponent } from './login/login.component';
import { MobileComponent } from './mobile/mobile.component';
import { PriceComponent } from './price/price.component';
import { RegisterComponent } from './register/register.component';
import { SpecificationsComponent } from './specifications/specifications.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', redirectTo: 'MobileComponent', pathMatch: 'full' },
  { path: 'mobile', component: MobileComponent },
  { path: 'register/:id/:name', component: RegisterComponent },  // Router Parameters
  { path: 'login', component: LoginComponent,
resolve:{
  data:ResolveGuard   // resolve data is loaded before route is activated
} },
  {
    path: 'view',component: ViewComponent,canActivate:[UserGuard], canActivateChild:[ChildGuard],canDeactivate:[ExitGuard],
    children: [
      { path: 'price', component: PriceComponent },
      { path: 'spec', component: SpecificationsComponent },
    ],
  },

  { path: ' ** ', component: MobileComponent },
  { path: 'Visit/visiter',
  canLoad:[LoadGuard],
  
  loadChildren: () => import('./Visit/visiter/visiter.module').then(m => m.VisiterModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
