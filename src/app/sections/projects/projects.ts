import { Component } from '@angular/core';
import { LucideFolder, LucideExternalLink } from '@lucide/angular';
import { PROJECTS } from '../../core/data/portfolio-data';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { GithubIcon } from '../../shared/icons/github-icon';

@Component({
  selector: 'app-projects',
  imports: [RevealOnScrollDirective, LucideFolder, LucideExternalLink, GithubIcon],
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly projects = PROJECTS;
}
