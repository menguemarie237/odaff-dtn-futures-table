import { Component } from '@wordpress/element';
import isEqual from 'lodash.isequal';

export default class FuturesTable extends Component {

	constructor( props ) {
		super( props );
	}

	shouldComponentUpdate( nexProps ) {
		return (
				nexProps.id !== this.props.id ||
				nexProps.apiKey !== this.props.apiKey ||
				nexProps.symbol !== this.props.symbol ||
				nexProps.priceFormat !== this.props.priceFormat ||
				nexProps.groupBy !== this.props.groupBy ||
				!isEqual( nexProps.visibleFields, this.props.visibleFields )
		);
	}

	componentDidMount() {
		this.rebuild();
	}

	componentDidUpdate() {
		this.rebuild();
	}

	rebuild() {
		if ( this.props && window.dtn && window.dtn.futures && window.dtn.futures.createFuturesTableWidget ) {
			window.dtn.futures.createFuturesTableWidget(
					{
						'apiKey' : this.props.apiKey,
						'container' : `.${ this.props.id }`,
						'symbol' : this.props.symbol,
						'visibleFields' : this.props.visibleFields,
						'groupBy' : this.props.groupBy,
						'priceFormat' : this.props.priceFormat,
					},
			);
		}
	}

	render() {
		return (
				<div className={ this.props.id }>
					<div className="loading-message">
						<svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68">
							<path fill="#3e8ecf" d="M16 34H0a34 34 0 0168-.2v.2H52a18 18 0 00-36 0z"/>
							<path fill="#77b856" d="M68 34.2A34 34 0 010 34h16a18 18 0 0036 0h16v.2z"/>
						</svg>
					</div>
				</div>
		);
	}
}
