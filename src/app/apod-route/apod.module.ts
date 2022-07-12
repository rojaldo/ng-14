import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApodRoutingModule } from './apod-routing.module';
import { ApodComponent } from '../components/apod/apod/apod.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ApodComponent
  ],
  imports: [
    CommonModule,
    ApodRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    YouTubePlayerModule,

  ]
})
export class ApodModule { }
