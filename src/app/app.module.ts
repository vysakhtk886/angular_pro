import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AssignmentComponent } from './assignment/assignment.component';
import { ColourPickerComponent } from './colour-picker/colour-picker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { UserRegComponent } from './user-reg/user-reg.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowdetailsComponent } from './showdetails/showdetails.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AssignmentComponent,
    ColourPickerComponent,
    UserRegComponent,
    ShowdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
