import { newSpecPage } from '@stencil/core/testing';

jest.mock('@sutton-signwriting/font-ttf/swu/swu', () => ({
  signSvg: jest.fn(() => '<svg class="signwriting"></svg>'),
}));

// cssValues reads getComputedStyle, which mock-doc computes to '' for every
// property; its behavior is covered by global.spec.ts. Here it just needs to
// return something composable.
jest.mock('../../global/global', () => ({
  ...jest.requireActual('../../global/global'),
  cssValues: () => ({ background: 'transparent', detail: ['000000', 'ffffff'], zoom: 1 }),
}));

import { signSvg } from '@sutton-signwriting/font-ttf/swu/swu';
import { SgnwSign } from './sgnw-sign';

const SIGN = '𝠃𝤛𝤵񀀒𝣴𝣵񀀚𝤌𝤆';

describe('sgnw-sign', () => {
  // global.ts creates one shared observer for the whole module, so capture
  // its callback once and keep it across tests
  const themeCallbacks: Array<() => void> = [];
  let originalMutationObserver: any;

  beforeAll(() => {
    originalMutationObserver = (globalThis as any).MutationObserver;
    (globalThis as any).MutationObserver = class {
      constructor(callback: () => void) {
        themeCallbacks.push(callback);
      }
      observe() {}
      disconnect() {}
    };
  });

  afterAll(() => {
    (globalThis as any).MutationObserver = originalMutationObserver;
  });

  // each test disconnects its component so no stale subscription survives
  // into the next test's disposed platform
  let page: any;

  beforeEach(() => {
    (signSvg as jest.Mock).mockClear();
  });

  afterEach(() => {
    if (page) {
      page.root.remove();
      page = null;
    }
  });

  const renderCount = () => (signSvg as jest.Mock).mock.calls.length;

  const notifyTheme = () => themeCallbacks.forEach(callback => callback());

  // newSpecPage resets the global window, so flip fonts-ready afterwards via
  // the same event the font loader dispatches
  const fontsReady = async (page: any) => {
    (window as any).sgnw = true;
    window.dispatchEvent(new Event('sgnw'));
    await page.waitForChanges();
  };

  const dispatchTransition = (el: Element, propertyName: string) => {
    const event = new Event('transitionend');
    (event as any).propertyName = propertyName;
    el.dispatchEvent(event);
  };

  it('renders nothing until the fonts are ready', async () => {
    page = await newSpecPage({
      components: [SgnwSign],
      html: `<sgnw-sign sign="${SIGN}"></sgnw-sign>`,
    });
    expect(renderCount()).toBe(0);
    expect(page.root.querySelector('svg')).toBeNull();
  });

  it('re-renders when the document theme mutates', async () => {
    page = await newSpecPage({
      components: [SgnwSign],
      html: `<sgnw-sign sign="${SIGN}"></sgnw-sign>`,
    });
    await fontsReady(page);
    expect(renderCount()).toBe(1);

    notifyTheme();
    await page.waitForChanges();
    expect(renderCount()).toBe(2);
  });

  it('re-renders when its computed color transitions, ignoring other properties', async () => {
    page = await newSpecPage({
      components: [SgnwSign],
      html: `<sgnw-sign sign="${SIGN}"></sgnw-sign>`,
    });
    await fontsReady(page);
    expect(renderCount()).toBe(1);

    dispatchTransition(page.root, 'color');
    await page.waitForChanges();
    expect(renderCount()).toBe(2);

    dispatchTransition(page.root, 'background-color');
    await page.waitForChanges();
    expect(renderCount()).toBe(3);

    dispatchTransition(page.root, 'width');
    await page.waitForChanges();
    expect(renderCount()).toBe(3);
  });

  it('stops watching once disconnected', async () => {
    page = await newSpecPage({
      components: [SgnwSign],
      html: `<sgnw-sign sign="${SIGN}"></sgnw-sign>`,
    });
    await fontsReady(page);
    expect(renderCount()).toBe(1);

    page.root.remove();
    notifyTheme();
    await page.waitForChanges();
    expect(renderCount()).toBe(1);
  });
});
