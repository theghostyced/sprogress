/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                                                              *
 *                                                                                              *
 *                        ____  ____                                                            *
 *                       / ___||  _ \ _ __ ___   __ _ _ __ ___  ___ ___                         *
 *                       \___ \| |_) | '__/ _ \ / _` | '__/ _ \/ __/ __|                        *
 *                        ___) |  __/| | | (_) | (_| | | |  __/\__ \__ \                        *
 *                       |____/|_|   |_|  \___/ \__, |_|  \___||___/___/                        *
 *                                              |___/                                           *
 *                                                                                              *
 *                                  Copyrights © 2019                                           *
 *                             <Author name="Daniel Eze"                                        *
 *                                url="https://twitter.com/theghostyced" />                     *
 *                                                                                              *
 *                                                                                              *
 *  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import css from '../utils/cssBuilder';
import helpers from '../utils/helpers';
import config from '../utils/config';

const SProgress = {};
let options;

/**
 * Listen to the scroll event registered
 * on the DOM
 *
 * @returns void
 */
const listenForScrollEvent = () => {
	document.addEventListener('scroll', () => {
		requestAnimationFrame(() => {
			calculateScrollDistance();
		});
	});
};

/**
 * @description Styles our scroll-progress class
 * @param {object} userOpt User's custom options
 * @return void
 */
const styleProgress = userOpt => {
	const newOptions = helpers.objectAssign(config.defaultOpts, userOpt);

	css`
		.scroll-progress {
			height: ${newOptions.height}px;
			background: ${newOptions.color};
			z-index: 999999;
			position: fixed;
		}
	`;
};

/**
 * Concerned with constructing/appending our SProgress
 * html template
 *
 * @returns void
 */
const insertTemplateToDOM = () => {
	const { body } = document;

	// Insert our template immediately after the body tag
	body.insertAdjacentHTML('afterbegin', config.defaultOpts.template);
};

/**
 * @description Where scroll distance calculation takes place
 *
 * @returns void
 */
const calculateScrollDistance = () => {
	const scrollTop = window.pageYOffset;
	const winHeight = window.innerHeight;
	const docHeight = getDocumentHeight();

	const totalDocScrollLength = docHeight - winHeight;
	const scrollPosition = Math.floor((scrollTop / totalDocScrollLength) * 100);

	const newState = helpers.objectAssign(config.state, {
		scrollPosition,
	});

	const newOpts = helpers.objectAssign(config.defaultOpts, config.state.userOpts);

	// Trigger event if distacne target is reached
	if (scrollPosition === newOpts.scrollDistanceTarget) dispatchCustomEvent('scrollDistanceEvent');

	updateScrollProgress(newState);
};

/**
 * @description Updates the scroll progess width
 * @param {object} newState Our new state object
 *
 * @returns void
 */
const updateScrollProgress = newState => {
	css`
		.scroll-progress {
			width: ${newState.scrollPosition}%;
		}
	`;
};

/**
 * Due to complexity with getting document height
 * in various browser we make check every implementation
 * and pick the highest
 *
 * @returns {int} Documents Height
 */
const getDocumentHeight = () => {
	return Math.max(
		document.body.scrollHeight,
		document.documentElement.scrollHeight,
		document.body.offsetHeight,
		document.documentElement.offsetHeight,
		document.body.clientHeight,
		document.documentElement.clientHeight,
	);
};

/**
 * @description Dispatcher for our custom event
 *
 * @param {string} eventName - Name of our event
 *
 * @returns void
 */
const dispatchCustomEvent = eventName => {
	const e = new CustomEvent(eventName);

	document.dispatchEvent(e);
};

/**
 * @description Invokes the scroll progress setup
 * @param {object} opts Options to customize progress
 *
 * @returns void
 */
SProgress.init = (opts = {}) => {
	config.state.setOptions = opts; // Adding the user options to our state obj

	insertTemplateToDOM();
	styleProgress(opts);

	listenForScrollEvent();
};

export default SProgress;
