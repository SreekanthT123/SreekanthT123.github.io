import { Injectable, NgZone, inject, signal } from '@angular/core';

const TRIGGER_OFFSET_PX = 140;

@Injectable({ providedIn: 'root' })
export class ActiveSectionService {
  readonly activeFragment = signal<string>('');

  private readonly zone = inject(NgZone);
  private elements: { fragment: string; el: HTMLElement }[] = [];
  private ticking = false;
  private onScroll = () => this.requestUpdate();
  private onResize = () => this.requestUpdate();

  observe(fragments: string[]): void {
    this.disconnect();

    this.elements = fragments
      .map((fragment) => ({ fragment, el: document.getElementById(fragment) }))
      .filter((entry): entry is { fragment: string; el: HTMLElement } => entry.el !== null);

    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('resize', this.onResize);
    });

    this.update();
  }

  disconnect(): void {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
  }

  private requestUpdate(): void {
    if (this.ticking) {
      return;
    }
    this.ticking = true;
    requestAnimationFrame(() => {
      this.update();
      this.ticking = false;
    });
  }

  private update(): void {
    if (this.elements.length === 0) {
      return;
    }

    const atBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    let current = this.elements[0].fragment;

    if (atBottom) {
      current = this.elements[this.elements.length - 1].fragment;
    } else {
      for (const { fragment, el } of this.elements) {
        if (el.getBoundingClientRect().top <= TRIGGER_OFFSET_PX) {
          current = fragment;
        } else {
          break;
        }
      }
    }

    if (current !== this.activeFragment()) {
      this.zone.run(() => this.activeFragment.set(current));
    }
  }
}
