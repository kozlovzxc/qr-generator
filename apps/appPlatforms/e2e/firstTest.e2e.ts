import { device, expect, element, by } from 'detox';

describe('Example', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should have welcome screen', async () => {
        await expect(element(by.id('editor'))).toBeVisible();
    });
});
