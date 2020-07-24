import { newE2EPage } from '@stencil/core/testing';

describe('sgnw-signbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sgnw-signbox></sgnw-signbox>');

    const element = await page.find('sgnw-signbox');
    expect(element).toHaveClass('hydrated');
  });
});
