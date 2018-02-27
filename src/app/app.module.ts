import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CatsListComponent } from './cats-list/cats-list.component';
import { CatsService } from './Shared/cats-service.service';
import { CatsItemComponent } from './cats-list/cats-item/cats-item.component';
import { HttpModule } from '@angular/http';
import { ColorfilterPipe } from './colorfilter.pipe';
import { MymodalComponent } from './cats-list/mymodal/mymodal.component';


@NgModule({
  declarations: [
    AppComponent,
    CatsListComponent,
    CatsItemComponent,
    ColorfilterPipe,
    MymodalComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    ReactiveFormsModule
    
  ],

  providers: [CatsService,FormBuilder ],
  bootstrap: [AppComponent]
})
export class AppModule { }
