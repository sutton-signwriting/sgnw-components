import { newE2EPage } from '@stencil/core/testing';

describe('sgnw-symbol', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sgnw-symbol></sgnw-symbol>');

    const element = await page.find('sgnw-symbol');
    expect(element).toHaveClass('hydrated');
  });
});
