import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import {
  LoadingEmptyComponent,
  LoadingLoadingComponent,
} from './loading-loading.component';

@Directive({
  selector: '[appLoading]',
})
export class LoadingDirective implements OnChanges {
  @Input('appLoading') modes: LoadingModes | null = null;

  @Input('appLoadingEmpty') empty: TemplateRef<unknown> | null = null;
  @Input('appLoadingSpinner') spiner: TemplateRef<unknown> | null = null;
  @Input('appLoadingErrored') errored: TemplateRef<unknown> | null = null;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<unknown>
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.viewContainerRef.clear();
    if (this.modes.errored && this.errored) {
      this.viewContainerRef.createEmbeddedView(this.errored);
      return;
    }
    if (this.modes.loading) {
      if (this.spiner) {
        this.viewContainerRef.createEmbeddedView(this.spiner);
      } else {
        this.viewContainerRef.createComponent(LoadingLoadingComponent);
      }
      return;
    }
    if (this.modes.empty) {
      if (this.empty) {
        this.viewContainerRef.createEmbeddedView(this.empty);
      } else {
        this.viewContainerRef.createComponent(LoadingEmptyComponent);
      }
      return;
    }
    if (this.modes.loading === false) {
      this.viewContainerRef.createEmbeddedView(this.template);
    }
  }
}

export type LoadingModes = {
  loading: boolean;
  errored: boolean;
  empty: boolean;
};
