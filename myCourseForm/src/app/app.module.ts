import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookService } from '../app/book.service';
//import { InMemoryMockDataService } from './book/in-memory-mock-data.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import {LoginService } from '../app/login.service';
import {LoginGuardService} from '../app/login-guard.service';

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
    //InMemoryWebApiModule.forRoot(InMemoryMockDataService)],
  declarations: [AppComponent, BookComponent, DashboardComponent, BookDetailComponent, LoginComponent],
  providers: [BookService, /*InMemoryMockDataService*/, LoginService, LoginGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }