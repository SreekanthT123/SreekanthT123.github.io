import { Component, inject } from '@angular/core';
import { LucideMail, LucideFileText } from '@lucide/angular';
import { NAV_LINKS, PROFILE, SOCIAL_LINKS } from '../../core/data/portfolio-data';
import { ActiveSectionService } from '../../core/services/active-section.service';
import { GithubIcon } from '../../shared/icons/github-icon';
import { LinkedinIcon } from '../../shared/icons/linkedin-icon';

@Component({
  selector: 'app-sidebar',
  imports: [LucideMail, LucideFileText, GithubIcon, LinkedinIcon],
  templateUrl: './sidebar.html',
})
export class Sidebar {
  private readonly activeSection = inject(ActiveSectionService);

  protected readonly profile = PROFILE;
  protected readonly navLinks = NAV_LINKS;
  protected readonly socialLinks = SOCIAL_LINKS;
  protected readonly activeFragment = this.activeSection.activeFragment;
}
