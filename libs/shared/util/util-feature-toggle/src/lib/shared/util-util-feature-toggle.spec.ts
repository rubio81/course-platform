import { sharedutilUtilFeatureToggle } from './shared/util-util-feature-toggle';

describe('sharedutilUtilFeatureToggle', () => {
	it('should work', () => {
		expect(sharedutilUtilFeatureToggle()).toEqual(
			'shared-util-util-feature-toggle',
		);
	});
});
