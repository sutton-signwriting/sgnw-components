import { newSpecPage } from '@stencil/core/testing';
import { SgnwUni8String } from './sgnw-uni8-string';

describe('sgnw-uni8-string', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SgnwUni8String],
      html: `<sgnw-uni8-string></sgnw-uni8-string>`,
    });
    expect(page.root).toEqualHtml(`
      <sgnw-uni8-string>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sgnw-uni8-string>
    `);
  });
});
