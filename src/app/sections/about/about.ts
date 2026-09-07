import { Component } from '@angular/core';
import { PROFILE } from '../../core/data/portfolio-data';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-about',
  imports: [RevealOnScrollDirective],
  templateUrl: './about.html',
})
export class About {
  protected readonly profile = PROFILE;
}
