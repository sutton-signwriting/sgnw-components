import { newSpecPage } from '@stencil/core/testing';
import { SgnwSign } from './sgnw-sign';

describe('sgnw-sign', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SgnwSign],
      html: `<sgnw-sign></sgnw-sign>`,
    });
    expect(page.root).toEqualHtml(`
      <sgnw-sign>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sgnw-sign>
    `);
  });
});
