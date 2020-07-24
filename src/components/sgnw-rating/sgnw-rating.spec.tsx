import { newSpecPage } from '@stencil/core/testing';
import { SgnwRating } from './sgnw-rating';

describe('sgnw-rating', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SgnwRating],
      html: `<sgnw-rating></sgnw-rating>`,
    });
    expect(page.root).toEqualHtml(`
      <sgnw-rating>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sgnw-rating>
    `);
  });
});
