import { normalizeColor, cssValues, onThemeChange } from './global';

describe('normalizeColor', () => {
  it('passes legacy rgb()/rgba() serializations through unchanged', () => {
    expect(normalizeColor('rgb(255, 255, 255)')).toBe('rgb(255, 255, 255)');
    expect(normalizeColor('rgba(0, 0, 0, 0)')).toBe('rgba(0, 0, 0, 0)');
    expect(normalizeColor('rgba(25, 20, 18, 0.6)')).toBe('rgba(25, 20, 18, 0.6)');
  });

  it('converts modern space-separated rgb() syntax', () => {
    expect(normalizeColor('rgb(25 20 18)')).toBe('rgb(25, 20, 18)');
    expect(normalizeColor('rgb(25 20 18 / 0.6)')).toBe('rgba(25, 20, 18, 0.6)');
    expect(normalizeColor('rgb(25 20 18 / 60%)')).toBe('rgba(25, 20, 18, 0.6)');
  });

  it('converts color(srgb …) serializations, the computed form of color-mix()', () => {
    expect(normalizeColor('color(srgb 1 1 1)')).toBe('rgb(255, 255, 255)');
    expect(normalizeColor('color(srgb 0.0980392 0.0784314 0.0705882 / 0.6)')).toBe(
      'rgba(25, 20, 18, 0.6)'
    );
  });

  it('returns the input unchanged when unparseable and no canvas exists', () => {
    // the mock-doc canvas has no usable 2d context, so the pixel-readback
    // fallback is unavailable in this environment
    expect(normalizeColor('oklch(0.219 0.003 48.5)')).toBe('oklch(0.219 0.003 48.5)');
  });

  it('leaves empty values alone', () => {
    expect(normalizeColor('')).toBe('');
  });
});

describe('cssValues', () => {
  const styleByElement = new Map<Element, { [key: string]: string }>();

  const mockComputedStyle = (values: { [key: string]: string }) =>
    ({ getPropertyValue: (name: string) => values[name] || '' } as any);

  beforeEach(() => {
    styleByElement.clear();
    jest.spyOn(window, 'getComputedStyle').mockImplementation(
      (el: Element) => mockComputedStyle(styleByElement.get(el) || {})
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('flattens a semi-transparent color over the resolved background', () => {
    const parent = document.createElement('div');
    const el = document.createElement('span');
    parent.appendChild(el);
    document.body.appendChild(parent);

    styleByElement.set(el, {
      // 60% white ink, transparent own background — the dark-mode shape that
      // used to parse as NaN and render black
      'color': 'color(srgb 1 1 1 / 0.6)',
      'background-color': 'rgba(0, 0, 0, 0)',
      'font-size': '30px',
    });
    styleByElement.set(parent, { 'background-color': 'rgb(0, 0, 0)' });

    const style = cssValues(el);
    // 255 * 0.6 over black = 153
    expect(style.detail[0]).toBe('999999');
    expect(style.detail[1]).toBe('000000');
    expect(style.background).toBe('transparent');
    expect(style.zoom).toBe(1);

    parent.remove();
  });

  it('defaults the background to white when every ancestor is transparent', () => {
    const el = document.createElement('span');
    document.body.appendChild(el);

    styleByElement.set(el, {
      'color': 'rgb(0, 0, 0)',
      'background-color': 'rgba(0, 0, 0, 0)',
      'font-size': '30px',
    });

    const style = cssValues(el);
    expect(style.detail[1]).toBe('ffffff');

    el.remove();
  });
});

describe('onThemeChange', () => {
  let observers: Array<{ callback: () => void; targets: Node[] }>;
  let originalMutationObserver: any;

  beforeEach(() => {
    observers = [];
    originalMutationObserver = (globalThis as any).MutationObserver;
    (globalThis as any).MutationObserver = class {
      targets: Node[] = [];
      constructor(public callback: () => void) {
        observers.push(this as any);
      }
      observe(target: Node) {
        this.targets.push(target);
      }
      disconnect() {}
    };
  });

  afterEach(() => {
    (globalThis as any).MutationObserver = originalMutationObserver;
  });

  it('notifies subscribers on a document attribute mutation and stops after unsubscribe', () => {
    const seen: string[] = [];
    const stopA = onThemeChange(() => seen.push('a'));
    const stopB = onThemeChange(() => seen.push('b'));

    expect(observers.length).toBe(1);
    expect(observers[0].targets).toContain(document.documentElement);

    observers[0].callback();
    expect(seen).toEqual(['a', 'b']);

    stopA();
    observers[0].callback();
    expect(seen).toEqual(['a', 'b', 'b']);

    stopB();
    observers[0].callback();
    expect(seen).toEqual(['a', 'b', 'b']);
  });
});
