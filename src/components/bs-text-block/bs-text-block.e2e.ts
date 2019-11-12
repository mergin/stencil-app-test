import { newE2EPage } from '@stencil/core/testing';

describe('bs-text-block', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<bs-text-block></bs-text-block>');

        const element = await page.find('bs-text-block');
        expect(element).toHaveClass('hydrated');
    });
});
