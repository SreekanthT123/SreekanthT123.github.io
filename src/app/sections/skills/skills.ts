import { Component } from '@angular/core';
import { SKILLS } from '../../core/data/portfolio-data';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-skills',
  imports: [RevealOnScrollDirective],
  templateUrl: './skills.html',
})
export class Skills {
  protected readonly skills = SKILLS;
}
