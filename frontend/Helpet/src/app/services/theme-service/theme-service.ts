import { DOCUMENT, inject, PLATFORM_ID, Service } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Service()
export class ThemeService {
  private darkMode = false;
  private document: Document = inject(DOCUMENT);
  private router: Router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.setDarkMode(this.isDarkMode());
    });
  }

  isDarkMode() {
    return this.darkMode;
  }


  setDarkMode(isDarkMode: boolean) {
    this.darkMode = isDarkMode;

    const darkReplace = '#1a1a1c';
    const lightOg = '#fafdff';

    const textLight = 'black';
    const textDark = '#fafdff';

    const fromColour = isDarkMode ? lightOg : darkReplace;
    const toColour = isDarkMode ? darkReplace : lightOg;
    const fromTxtColour = isDarkMode ? textLight : textDark;
    const toTxtColour = isDarkMode ? textDark : textLight;

    this.hijackStylesheet(fromColour, toColour, fromTxtColour, toTxtColour);
  }

  private hijackStylesheet(fromColour: string, toColour: string, fromTxtColour: string, toTxtColour: string) {
    if (!isPlatformBrowser(this.platformId)){
      return;
    }
    const tempElem = this.document.createElement('div');
    tempElem.style.color = fromColour;
    this.document.body.appendChild(tempElem);

    const rgbWithSpaces = getComputedStyle(tempElem).color.toLowerCase();
    const rgbWithoutSpaces = rgbWithSpaces.replace(/\s+/g, '');
    const hexFormat = fromColour.toLowerCase();

    this.document.body.removeChild(tempElem);

    const tempTextElem = this.document.createElement('div');
    tempTextElem.style.color = fromTxtColour;
    this.document.body.appendChild(tempTextElem);

    const textRgbWithSpaces = getComputedStyle(tempTextElem).color.toLowerCase();
    const textRgbWithoutSpaces = textRgbWithSpaces.replace(/\s+/g, '');
    const textHexFormat = fromTxtColour.toLowerCase();

    this.document.body.removeChild(tempTextElem);

    for (let i = 0; i < this.document.styleSheets.length; i++) {
      try {
        const sheet = this.document.styleSheets[i];
        const rules = sheet.cssRules;

        if (!rules) continue;

        for (let j = 0; j < rules.length; j++) {
          const rule = rules[j] as CSSStyleRule;

          if (rule.style) {
            if (rule.style.color) {
              const colorClean = rule.style.color.toLowerCase().replace(/\s+/g, '');
              if (colorClean === textRgbWithoutSpaces || colorClean === textHexFormat) {
                rule.style.color = toTxtColour;
              }
            }

            if (rule.style.backgroundColor) {
              const bgClean = rule.style.backgroundColor.toLowerCase().replace(/\s+/g, '');
              if (bgClean === rgbWithoutSpaces || bgClean === hexFormat) {
                rule.style.backgroundColor = toColour;
              }
            }

            if (rule.style.background) {
              let backgroundText = rule.style.background;

              const escapedRgbWithSpaces = rgbWithSpaces.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
              const escapedRgbWithoutSpaces = rgbWithoutSpaces.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');

              const regexSpaces = new RegExp(escapedRgbWithSpaces, 'gi');
              const regexNoSpaces = new RegExp(escapedRgbWithoutSpaces, 'gi');
              const regexHex = new RegExp (hexFormat, 'gi');

              let updatedBackground = backgroundText
                .replace(regexSpaces, toColour)
                .replace(regexNoSpaces, toColour)
                .replace(regexHex, toColour)

              if (backgroundText !== updatedBackground) {
                rule.style.background = updatedBackground;
              }

            }
          }
        }
      } catch (e) {
        console.warn('Skipped a stylesheet due to an error: ', e);
      }
    }
  }
}
