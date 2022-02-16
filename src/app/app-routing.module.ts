import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankinfoComponent } from './bankinfo/bankinfo.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'bankinfo', component:BankinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
