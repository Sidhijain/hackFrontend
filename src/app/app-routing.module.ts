import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { HeadersComponent } from './Components/headers/headers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'header', component: HeadersComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
