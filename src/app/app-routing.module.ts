import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ControlComponent } from './components/control/control.component';
 
const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: "control",
		component: ControlComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
