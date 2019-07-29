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

// Generating a new object using Object.assign
//
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

const objectAssign = (currDefault, newDefault) => {
	if (!isObject(currDefault) || !isObject(newDefault)) throw new Error('Provide a valid object');

	return Object.assign({}, currDefault, newDefault);
};

const isObject = object => {
	return typeof object === 'object';
};

export default {
	objectAssign,
	isObject,
};
