import { newE2EPage } from '@stencil/core/testing';

describe('bs-slider', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<bs-slider></bs-slider>');

        const element = await page.find('bs-slider');
        expect(element).toHaveClass('hydrated');
    });
});
