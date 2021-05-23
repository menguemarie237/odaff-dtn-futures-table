import { registerBlockType } from '@wordpress/blocks';

import edit from './edit';
import save from './save';
import attributes from './attributes';
import icon from './icon';

import './style.scss';

registerBlockType( 'odaff/dtn-futures-table', {
	icon,
	attributes,
	example : {},
	edit,
	save,
} );
