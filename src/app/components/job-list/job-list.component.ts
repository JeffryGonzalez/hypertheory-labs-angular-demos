import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LoadingModes } from '../../directives/loading.directive';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent implements OnInit {
  initialState = {
    empty: false,
    loading: true,
    errored: false,
    data: [],
  };
  subject = new BehaviorSubject<Model>(this.initialState);
  model$: Observable<Model> = this.subject.asObservable();
  constructor() {}

  ngOnInit() {}

  switchToLoaded() {
    const loadedState = {
      ...this.initialState,
      loading: false,
      data: ['Dog', 'Cat', 'Mouse'],
    };
    this.subject.next(loadedState);
  }

  switchToInitialState() {
    this.subject.next(this.initialState);
  }
  switchToLoadedEmptyState() {
    const emptyState = {
      ...this.initialState,
      loading: false,
      empty: true,
      data: [],
    };
    this.subject.next(emptyState);
  }

  switchToLoadedErrorState() {
    const errorState = {
      ...this.initialState,
      errored: true,
      loading: false,
    };
    this.subject.next(errorState);
  }
}

type Model = LoadingModes & {
  data: string[];
};
