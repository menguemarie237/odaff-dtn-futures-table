import {Fragment} from '@wordpress/element'
import {BaseControl, ColorIndicator} from "@wordpress/components";
import {ColorPalette} from "@wordpress/block-editor";

export default function ColorPaletteControl({label, color, onChange, disableCustom = false}) {

	const labelElement = (
		<Fragment>
			{label}
			{color && <ColorIndicator colorValue={color}/>}
		</Fragment>
	)
	return (
		<BaseControl className="cpm-color-selector" label={labelElement}>
			<ColorPalette
				value={color}
				onChange={onChange}
				disableCustomColors={disableCustom}
			/>
		</BaseControl>
	);
}
