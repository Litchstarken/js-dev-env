import './index.css';
import numeral from 'numeral';
// numeral is an npm pack for handling number formatting
const courseValue = numeral(1000).format('0,0.00');
// eslint-disable-next-line no-console
console.log(`I would pay ${courseValue} for this awesome course!`);