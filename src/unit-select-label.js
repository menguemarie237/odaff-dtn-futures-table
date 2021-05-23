import './unit-select-label.scss';

export default function UnitSelectLabel( { value, label, onChange } ) {
	return (
			<div className="unit-select">
				<span className="label">{ label }</span>
				<span className="buttons">
					<button
							aria-pressed={ value === '%' }
							onClick={ () => onChange( '%' ) }
					>%</button>
					<button
							aria-pressed={ value === 'px' }
							onClick={ () => onChange( 'px' ) }
					>px</button>
				</span>
			</div>
	);
}
