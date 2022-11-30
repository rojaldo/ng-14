import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApodRoutingModule } from './apod-routing.module';
import { ApodPickerComponent } from 'src/app/components/apod/apod-picker/apod-picker.component';
import { ApodContentComponent } from 'src/app/components/apod/apod-content/apod-content.component';
import { ApodService } from 'src/app/services/apod.service';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ApodComponent } from 'src/app/components/apod/apod/apod.component';


@NgModule({
  declarations: [
    ApodComponent,
    ApodPickerComponent,
    ApodContentComponent,
  ],
  imports: [
    CommonModule,
    ApodRoutingModule,
    YouTubePlayerModule,
    FormsModule,
    NgbModule,
  ],
  providers: [ApodService]
})
export class ApodModule { }
