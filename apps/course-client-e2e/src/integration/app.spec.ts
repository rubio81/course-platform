import { getGreeting } from '../support/app.po';

describe('course-client', () => {
	beforeEach(() => cy.visit('/course'));

	it('should show lesson 1', () => {
		cy.contains('1.- First lesson');
	});
});
