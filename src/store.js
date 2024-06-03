import { writable, readable } from 'svelte/store';

const families = [
	'Alegreya Variable',
	'Bitter Variable',
	'Crimson Pro Variable',
	'Edu SA Beginner Variable',
	'Mulish Variable',
	'Nunito Variable',
	'Piazzolla Variable',
	'Playpen Sans Variable',
	'Roboto Slab Variable',
	'Rubik Variable'
	//'Roboto Condensed Variable',
	// 'Nunito Sans Variable'
	// 'Edu TAS Beginner Variable',
	//'Aleo Variable',
	//'Anybody Variable',
	//'Ballet Variable',
	//'Baloo 2 Variable',
	//'Briem Hand Variable',
	//'Caveat Variable',
	//'Cinzel Variable',
	//'Comfortaa Variable',
	//'Dancing Script Variable',
	//'DM Sans Variable',
	//'EB Garamond Variable',
	//'Edu NSW ACT Foundation Variable',
	//'Edu QLD Beginner Variable',
	//'Edu VIC WA NT Beginner Variable',
	//'Fraunces Variable',
	//'Grandstander Variable',
	//'Inter Variable',
	//'Lora Variable',
	//'Manrope Variable',
	//'Merienda Variable',
	//'Montserrat Variable',
	//'MuseoModerno Variable',
	//'Noto Sans Variable',
	//'Noto Serif Variable',
	//'Open Sans Variable',
	//'Oxanium Variable',
	//'Pixelify Sans Variable',
	//'Playfair Display Variable',
	//'Public Sans Variable',
	//'Raleway Variable',
	//'Roboto Flex Variable'
	//'Shantell Sans Variable',
	//'Tektur Variable',
	//'Tourney Variable',
	//'Yrsa Variable',
];

export const fontFamilies = readable(families);

export const fontFamily = writable(families[0]);

export const typeScales = readable(['sm', 'base', 'lg', 'xl', '2xl']);

export const typeScale = writable('base');

/*
prose-sm
prose-base
prose-lg
prose-xl
prose-2xl
*/
