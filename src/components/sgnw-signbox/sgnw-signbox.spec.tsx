import { newSpecPage } from '@stencil/core/testing';
import { SgnwSignbox } from './sgnw-signbox';

describe('sgnw-signbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SgnwSignbox],
      html: `<sgnw-signbox></sgnw-signbox>`,
    });
    expect(page.root).toEqualHtml(`
      <sgnw-signbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sgnw-signbox>
    `);
  });
});
