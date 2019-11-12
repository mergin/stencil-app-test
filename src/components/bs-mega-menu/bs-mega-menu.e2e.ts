import { newE2EPage } from '@stencil/core/testing';

describe('bs-mega-menu', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<bs-mega-menu></bs-mega-menu>');

        const element = await page.find('bs-mega-menu');
        expect(element).toHaveClass('hydrated');
    });
});
