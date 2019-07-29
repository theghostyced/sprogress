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

// Taking advantage of the tagged template literal
// in order to implement a custom CSS-in-JS
// Reference: https://wesbos.com/tagged-template-literals

const cssBuilder = (strings, ...interpolations) => {
	const styleEle = document.createElement('style');
	document.head.appendChild(styleEle); // Append to the DOM

	const { sheet } = styleEle;

	const generatedCSSString = generateCssString(strings, interpolations);

	const index = sheet.cssRules.length;
	const cssRule = `${generatedCSSString}`;

	sheet.insertRule(cssRule, index);
};

// Since tag template literal returns an Array of strings and the
// interpolated values, we run a reduce to generated a css string
// that we then return
const generateCssString = (strings, interpolations) =>
	strings.reduce((acc, string, i) => acc + string + (interpolations[i] === undefined ? '' : interpolations[i]), '');

export default cssBuilder;
