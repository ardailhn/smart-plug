import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { TimeComponent } from './time/time.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"panel", component:PanelComponent},
  {path:"time", component:TimeComponent},
  {path:"**", redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
