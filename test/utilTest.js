import { expect } from 'chai';
import helpers from '../utils/helpers';
import config from '../utils/config';

describe('util folder tests', () => {
	context('helpers file test', () => {
		context('objectAssign function test ⛑', () => {
			it('should be an object', () => {
				expect(helpers).to.be.an.instanceof(Object);
			});

			it('should return a newState object', () => {
				const newState = helpers.objectAssign({ state: '' }, { state: 'new' });
				expect(newState).to.be.an.instanceof(Object);
			});

			it('should override the default key-value with new', () => {
				const newState = helpers.objectAssign({ state: 'old' }, { state: 'new' });
				expect(newState.state).to.equal('new');
			});

			it('should throw error when none Object is passed', () => {
				expect(helpers.objectAssign.bind(1, 3)).to.throw('Provide a valid object');
			});
		});

		context('isObject test ⛑', () => {
			it('should return true when a valid object is passed', () => {
				expect(helpers.isObject({})).to.equal(true);
			});

			it('should return false when a valid object is passed', () => {
				expect(helpers.isObject(1)).to.equal(false);
			});
		});
	});

	context('config tests ⛑', () => {
		it('should be an object', () => {
			expect(config).to.be.an.instanceof(Object);
		});

		it('should have key defaultOpts', () => {
			expect(config).to.have.property('defaultOpts');
		});

		it('should have key state', () => {
			expect(config).to.have.property('state');
		});
	});
});
