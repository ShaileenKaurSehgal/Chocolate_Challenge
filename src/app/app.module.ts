import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OverviewChocolateComponent } from './components/overview-chocolate/overview-chocolate.component';
import { DetailsChocolateComponent } from './components/details-chocolate/details-chocolate.component';

import { FormsModule } from '@angular/forms';

// PrimeNg Imports
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeChocolateComponent } from './components/home-chocolate/home-chocolate.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewChocolateComponent,
    DetailsChocolateComponent,
    HomeChocolateComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
