import { Component, afterNextRender, inject } from '@angular/core';
import { Sidebar } from './layout/sidebar/sidebar';
import { About } from './sections/about/about';
import { Experience } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';
import { ActiveSectionService } from './core/services/active-section.service';
import { NAV_LINKS } from './core/data/portfolio-data';

@Component({
  selector: 'app-root',
  imports: [Sidebar, About, Experience, Projects, Skills],
  templateUrl: './app.html',
})
export class App {
  private readonly activeSection = inject(ActiveSectionService);

  constructor() {
    afterNextRender(() => {
      this.activeSection.observe(NAV_LINKS.map((link) => link.fragment));
    });
  }
}
