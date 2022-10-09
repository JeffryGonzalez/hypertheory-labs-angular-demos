import {
  Directive,
  Input,
  OnChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { LoadingMessageComponent } from './loading-message.component';
@Directive({
  selector: '[appLoading]',
})
/**
 * The appLoading Directive
 */
export class LoadingDirective implements OnChanges {
  /**
   * The LoadingModes object. Required.
   */
  @Input('appLoading') modes: LoadingModes | null = null;

  /**
   * appLoadingEmpty can be either a string, a reference to a template, or empty.
   */
  @Input('appLoadingEmpty') empty: TemplateRef<unknown> | string =
    'You Have No Data';
  @Input('appLoadingSpinner') spinner: TemplateRef<unknown> | string =
    'Your Data is Loading';
  @Input('appLoadingErrored') errored: TemplateRef<unknown> | string =
    'There was an Error Loading Your Data';

  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<unknown>
  ) {}
  ngOnChanges(): void {
    this.viewContainerRef.clear();
    if (this.modes.errored) {
      if (typeof this.errored !== 'string') {
        this.viewContainerRef.createEmbeddedView(this.errored);
      } else {
        const c = this.viewContainerRef.createComponent(
          LoadingMessageComponent
        );
        c.instance.message = <string>this.errored;
      }
      return;
    }
    if (this.modes.loading) {
      if (typeof this.spinner !== 'string') {
        this.viewContainerRef.createEmbeddedView(this.spinner);
      } else {
        const c = this.viewContainerRef.createComponent(
          LoadingMessageComponent
        );
        c.instance.message = <string>this.spinner;
      }
      return;
    }
    if (this.modes.empty) {
      if (typeof this.empty !== 'string') {
        this.viewContainerRef.createEmbeddedView(this.empty);
      } else {
        const c = this.viewContainerRef.createComponent(
          LoadingMessageComponent
        );
        c.instance.message = <string>this.empty;
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
