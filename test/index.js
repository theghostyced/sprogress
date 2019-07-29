/* eslint-disable no-underscore-dangle */
import { expect } from 'chai';
import rewire from 'rewire';
import SProgress from '../src/sprogress';

describe('SProgress tests', () => {
	context('listenForScrollEvent test ⛑', () => {
		it('should be a function', () => {
			const app = rewire('../src/sprogress');
			const listenForScrollEvent = app.__get__('listenForScrollEvent');
			expect(listenForScrollEvent).to.be.a('function');
		});
	});

	context('init test', () => {
		it('should be a function', () => {
			expect(SProgress.init).to.be.a('function');
		});
	});
});
