import { newSpecPage } from '@stencil/core/testing';
import { SgnwSymbol } from './sgnw-symbol';

describe('sgnw-symbol', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SgnwSymbol],
      html: `<sgnw-symbol></sgnw-symbol>`,
    });
    expect(page.root).toEqualHtml(`
      <sgnw-symbol>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sgnw-symbol>
    `);
  });
});
