import { Component } from '@angular/core';
import { EXPERIENCE } from '../../core/data/portfolio-data';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-experience',
  imports: [RevealOnScrollDirective],
  templateUrl: './experience.html',
})
export class Experience {
  protected readonly experience = EXPERIENCE;
}
