import { newSpecPage } from '@stencil/core/testing';
import { SgnwUni8Symbol } from './sgnw-uni8-symbol';

describe('sgnw-uni8-symbol', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SgnwUni8Symbol],
      html: `<sgnw-uni8-symbol></sgnw-uni8-symbol>`,
    });
    expect(page.root).toEqualHtml(`
      <sgnw-uni8-symbol>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sgnw-uni8-symbol>
    `);
  });
});
