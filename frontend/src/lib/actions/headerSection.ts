import {
  headerTheme,
  type HeaderTheme,
  type SectionThemeHint
} from '$lib/stores/headerTheme.svelte';
import { theme } from '$lib/stores/theme.svelte';

function resolveHint(hint: SectionThemeHint): HeaderTheme {
  if (hint === 'inverse') {
    return theme.current === 'light' ? 'dark' : 'light';
  }
  return hint;
}

const registered = new Map<HTMLElement, SectionThemeHint>();
let ticking = false;

function updateHeaderTheme() {
  const header = document.querySelector('header');
  const headerHeight = header?.getBoundingClientRect().height ?? 80;

  let activeHint: SectionThemeHint | null = null;
  let activeRect: DOMRect | null = null;

  for (const [el, hint] of registered) {
    const rect = el.getBoundingClientRect();
    if (rect.top <= headerHeight && rect.bottom >= headerHeight) {
      activeHint = hint;
      activeRect = rect; // live rect — always current on each rAF tick
      break;
    }
  }

  headerTheme.setSection(
    activeHint ? resolveHint(activeHint) : null,
    activeRect
  );
}

function requestUpdate() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    updateHeaderTheme();
    ticking = false;
  });
}

export function headerSection(
  node: HTMLElement,
  hint: SectionThemeHint = 'inverse'
) {
  registered.set(node, hint);
  requestUpdate();
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);

  return {
    update(newHint: SectionThemeHint) {
      registered.set(node, newHint);
      requestUpdate();
    },
    destroy() {
      registered.delete(node);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      requestUpdate();
    }
  };
}
