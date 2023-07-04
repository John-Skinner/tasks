import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { WorkersComponent } from './components/workers/workers.component';

const appRoutes:Routes = [
  { path:'admin',component:AdminComponent },
  { path:'tasks',component:TasksComponent },
  { path:'workers',component:WorkersComponent },
  { path:'',redirectTo:'/workers',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TasksComponent,
    WorkersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
        appRoutes,
        {enableTracing:true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
