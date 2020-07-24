import { newE2EPage } from '@stencil/core/testing';

describe('sgnw-rating', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sgnw-rating></sgnw-rating>');

    const element = await page.find('sgnw-rating');
    expect(element).toHaveClass('hydrated');
  });
});
