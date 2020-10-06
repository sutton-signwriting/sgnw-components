import { newE2EPage } from '@stencil/core/testing';

describe('sgnw-sign', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sgnw-sign></sgnw-sign>');

    const element = await page.find('sgnw-sign');
    expect(element).toHaveClass('hydrated');
  });
});
