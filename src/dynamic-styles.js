import { minifyCSS } from './shared';

export default function DynamicStyles(
		{
			id,
			width = 100,
			widthUnits = '%',
			containerMarginTop = 32,
			containerMarginBottom = 32,
			containerHPadding = 0,
			containerVPadding = 0,
			containerBackground = 'transparent',
		},
) {

	if ( !id ) {
		return null;
	}

	//language=CSS
	let styles = `
		.${ id } {
			width: ${ width }${ widthUnits };
			margin-top: ${ containerMarginTop }px;
			margin-bottom: ${ containerMarginBottom }px;
			padding: ${ containerVPadding }px ${ containerHPadding }px;
			background-color: ${ containerBackground };
		}

		.${ id } .loading-message {
			margin: auto;
		}
	`;

	return (
			<style>
				{ minifyCSS( styles ) }
			</style>
	);
}
