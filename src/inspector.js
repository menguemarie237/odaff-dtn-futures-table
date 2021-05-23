import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	RangeControl,
	CheckboxControl,
	TextControl,
	ToggleControl,
	SelectControl,
} from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import UnitSelectLabel from './unit-select-label';
import ColorPaletteControl from './color-pallete-control';

const FIELD_OPTIONS = [
	'LAST',
	'OPEN',
	'CLOSE',
	'ASK',
	'BID',
	'CHANGE',
	'HIGH',
	'LOW',
	'CONTRACT_HIGH',
	'CONTRACT_LOW',
	'SETTLE_DATE',
	'SETTLE_PRICE',
];

const onOptionClicked = ( value, list, setAttributes ) => {
	if ( list.includes( value ) ) {
		setAttributes( { categories : list.filter( listValue => value !== listValue ) } );
	} else {
		setAttributes( { categories : [ ...list, value ] } );
	}
};

export default function Inspector(
		{
			setAttributes,
			apiKey,
			symbol,
			visibleFields,
			groupBy,
			priceFormat,

			width,
			widthUnits,

			containerMarginTop,
			containerMarginBottom,
			containerHPadding,
			containerVPadding,
			containerBackground,

		},
) {
	const widthMin = widthUnits === '%' ? 10 : 300;
	const widthMax = widthUnits === '%' ? 100 : 1140;
	const widthReset = widthUnits === '%' ? 100 : 640;

	return (
			<InspectorControls>
				<PanelBody title={ __( 'Settings' ) }>
					<TextControl
							label={ __( 'API Key' ) }
							value={ apiKey }
							onChange={ value => setAttributes( { apiKey : value } ) }
					/>
					<RangeControl
							className="has-unit-select"
							label={
								<UnitSelectLabel
										label="Width"
										value={ widthUnits }
										onChange={ value => setAttributes( { widthUnits : value } ) }
								/>
							}
							resetFallbackValue={ widthReset }
							min={ widthMin }
							max={ widthMax }
							allowReset
							withInputField
							value={ width }
							onChange={ value => setAttributes( { width : value } ) }
					/>
					<TextControl
							label={ __( 'Symbol' ) }
							value={ symbol }
							onChange={ value => setAttributes( { symbol : value } ) }
					/>
					<ToggleControl
							label={ __( 'Group futures' ) }
							checked={ groupBy }
							onChange={ () => setAttributes( { groupBy : !groupBy } ) }
					/>
					<SelectControl
							label={ __( 'Price format' ) }
							value={ priceFormat }
							onChange={ value => setAttributes( { priceFormat : value } ) }
							options={
								[
									{ label : 'Tick', value : 'TICK' },
									{ label : 'Decimal', value : 'DECIMAL' },
								]
							}
					/>
				</PanelBody>
				<PanelBody title={ __( 'Visible fields' ) } initialOpen={ false }>
					{
						FIELD_OPTIONS.map( option => <CheckboxControl
								label={ option }
								checked={ visibleFields.includes( option ) }
								onChange={ () => onOptionClicked( option, visibleFields, setAttributes ) }
						/> )
					}
				</PanelBody>




				<PanelBody title={ __( 'Block container' ) } initialOpen={ false }>
					<RangeControl
							label={ __( 'Margin top' ) }
							resetFallbackValue={ 32 }
							min={ 0 }
							max={ 128 }
							allowReset
							withInputField
							value={ containerMarginTop }
							onChange={ value => setAttributes( { containerMarginTop : value } ) }
					/>
					<RangeControl
							label={ __( 'Margin bottom' ) }
							resetFallbackValue={ 32 }
							min={ 0 }
							max={ 128 }
							allowReset
							withInputField
							value={ containerMarginBottom }
							onChange={ value => setAttributes( { containerMarginBottom : value } ) }
					/>
					<RangeControl
							label={ __( 'Left/Right padding' ) }
							resetFallbackValue={ 0 }
							min={ 0 }
							max={ 128 }
							allowReset
							withInputField
							value={ containerHPadding }
							onChange={ value => setAttributes( { containerHPadding : value } ) }
					/>
					<RangeControl
							label={ __( 'Top/Bottom padding' ) }
							resetFallbackValue={ 0 }
							min={ 0 }
							max={ 128 }
							allowReset
							withInputField
							value={ containerVPadding }
							onChange={ value => setAttributes( { containerVPadding : value } ) }
					/>
					<ColorPaletteControl
							label={ __( 'Background color' ) }
							color={ containerBackground }
							onChange={ value => setAttributes( { containerBackground : value } ) }
					/>
				</PanelBody>
			</InspectorControls>
	);

}
