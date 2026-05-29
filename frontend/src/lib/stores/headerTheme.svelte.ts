export type HeaderTheme = 'light' | 'dark';
export type SectionThemeHint = HeaderTheme | 'inverse';

let current = $state<HeaderTheme | null>(null);
let activeSectionRect = $state<DOMRect | null>(null);

export const headerTheme = {
  get current() { return current; },
  get activeSectionRect() { return activeSectionRect; },
  setSection(theme: HeaderTheme | null, rect: DOMRect | null) {
    current = theme;
    activeSectionRect = rect;
  },
};
