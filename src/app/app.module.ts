import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';



import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { FooterModule } from '@coreui/angular';


import { EmpAddEditComponent } from './prov-add-edit/prov-add-edit.component'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ProvidersComponent } from './providersList/providers.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpAddEditComponent,
    WelcomePageComponent,
    ProvidersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    FooterModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
