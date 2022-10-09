import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { LoadingDirective } from './directives/loading.directive';
import { LoadingLoadingComponent } from './directives/loading-loading.component';
import { LoadingEmptyComponent } from './directives/loading-empty.component';
import { LoadingErrorComponent } from './directives/loading-error.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    JobListComponent,
    LoadingDirective,
    LoadingLoadingComponent,
    LoadingEmptyComponent,
    LoadingErrorComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
