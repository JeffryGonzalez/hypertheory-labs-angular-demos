import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { LoadingDirective } from './directives/loading.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    JobListComponent,
    LoadingDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
