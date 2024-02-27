import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Added missing semicolon here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListStudentsComponent } from './Students/list-students/list-students.component';
import { AddStudentComponent } from './Students/add-student/add-student.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListStudentsComponent,
    AddStudentComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
