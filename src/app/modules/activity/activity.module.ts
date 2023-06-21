import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './activity.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ActiveService } from 'src/app/active.service';


@NgModule({
  declarations: [
    ActivityComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    FormsModule
    
  ]
})
export class ActivityModule { 
   
  
}