import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CatsListComponent } from './cats-list/cats-list.component';
import { CatsService } from './Shared/cats-service.service';
import { CatsItemComponent } from './cats-list/cats-item/cats-item.component';


@NgModule({
  declarations: [
    AppComponent,
    CatsListComponent,
    CatsItemComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule
  ],

  providers: [CatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
