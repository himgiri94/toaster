import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToastComponentComponent } from './toast/toast-component/toast-component.component';
import { DataCheckComponent } from './data-check/data-check.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'
import { ListService } from './service/list.service';
import { ToastrModule } from 'ngx-toastr';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  },
  { path: 'user/:id', component: DataCheckComponent },
  { path: 'user', component: DataCheckComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ToastComponentComponent,
    DataCheckComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [
    ListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
