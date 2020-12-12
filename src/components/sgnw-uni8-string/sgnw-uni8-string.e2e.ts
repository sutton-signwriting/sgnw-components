import { newE2EPage } from '@stencil/core/testing';

describe('sgnw-uni8-string', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sgnw-uni8-string></sgnw-uni8-string>');

    const element = await page.find('sgnw-uni8-string');
    expect(element).toHaveClass('hydrated');
  });
});
