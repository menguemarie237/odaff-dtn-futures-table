import { Fragment } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';
import DynamicStyles from './dynamic-styles';

export default function save( { attributes } ) {
	const {
		id,
		apiKey,
		symbol,
		visibleFields,
		groupBy,
		priceFormat,
	} = attributes;
	return (
			<Fragment>
				<DynamicStyles { ...attributes } />
				<div { ...useBlockProps.save() }
				     data-key={ apiKey }
				     data-fields={ JSON.stringify( visibleFields ) }
				     data-symbol={ symbol }
				     data-groupby={ groupBy }
				     data-priceformat={ priceFormat }
				     data-target={ id }
				>
					<div className={ id }>
						<div className="loading-message">
							<svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68">
								<path fill="#3e8ecf" d="M16 34H0a34 34 0 0168-.2v.2H52a18 18 0 00-36 0z"/>
								<path fill="#77b856" d="M68 34.2A34 34 0 010 34h16a18 18 0 0036 0h16v.2z"/>
							</svg>
						</div>
					</div>
				</div>
			</Fragment>
	);
}
