export function uniqueId( prefix = 'el' ) {
	const d = new Date();
	return prefix + '-' + d.valueOf().toString( 36 );
}

export function minifyCSS( css ) {
	return css.replace( /\n/g, '' ).replace( /\s\s+/g, ' ' );
}
