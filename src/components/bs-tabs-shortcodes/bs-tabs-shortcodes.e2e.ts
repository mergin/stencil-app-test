import { newE2EPage } from '@stencil/core/testing';

describe('bs-tabs-shortcodes', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<bs-tabs-shortcodes></bs-tabs-shortcodes>');

        const element = await page.find('bs-tabs-shortcodes');
        expect(element).toHaveClass('hydrated');
    });
});
