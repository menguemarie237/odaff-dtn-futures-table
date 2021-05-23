import { Fragment } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';
import Inspector from './inspector';
import FuturesTable from './table';
import { uniqueId } from './shared';

import './editor.scss';
import DynamicStyles from './dynamic-styles';

export default function Edit( { attributes, setAttributes } ) {
	const {
		id,
		apiKey,
		symbol,
		visibleFields,
		groupBy,
		priceFormat,
	} = attributes;

	if ( !id || document.querySelectorAll( `.${ id }` ).length > 1 ) {
		setAttributes( { id : uniqueId( 'odaff-dtn-futures-table' ) } );
	}

	return (
			<Fragment>
				<Inspector { ...attributes } setAttributes={ setAttributes }/>
				<DynamicStyles { ...attributes }/>
				<div { ...useBlockProps() }>
					<FuturesTable
							id={ id }
							apiKey={ apiKey }
							symbol={ symbol }
							visibleFields={ visibleFields }
							groupBy={ groupBy }
							priceFormat={ priceFormat }
					/>
				</div>
			</Fragment>
	);
}
