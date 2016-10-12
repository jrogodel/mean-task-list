import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }          from '@angular/http';

import { AppComponent }   from './app.component';
import { TasksComponent } from './tasks/tasks.component';

import { TaskService }    from './services/task.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, TasksComponent ],
  providers: [ TaskService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
