import { newE2EPage } from '@stencil/core/testing';

describe('sgnw-uni8-symbol', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sgnw-uni8-symbol></sgnw-uni8-symbol>');

    const element = await page.find('sgnw-uni8-symbol');
    expect(element).toHaveClass('hydrated');
  });
});
