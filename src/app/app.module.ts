import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PackagesComponent } from './packages/packages.component';
import { PackageService } from './package.service';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap/accordion/accordion-config';
import { FilesizePipe } from './filesize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PackagesComponent,
    FilesizePipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [PackageService, NgbAccordionConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
