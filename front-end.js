(
		function() {
			function init() {
				var els = document.querySelectorAll( '.wp-block-odaff-dtn-futures-table' );
				for ( var i = 0; i < els.length; i ++ ) {
					var arguments = {
						apiKey : els[ i ].getAttribute( 'data-key' ),
						container : '.' + els[ i ].getAttribute( 'data-target' ),
						symbol : els[ i ].getAttribute( 'data-symbol' ),
						visibleFields : JSON.parse( els[ i ].getAttribute( 'data-fields' ) ),
						groupBy : els[ i ].getAttribute( 'data-groupby' ),
						priceFormat : els[ i ].getAttribute( 'data-priceformat' ),
					};

					if ( window.dtn &&
					     window.dtn.futures &&
					     window.dtn.futures.createFuturesTableWidget ) {
						window.dtn.futures.createFuturesTableWidget( arguments );
					}
				}
			}

			if ( document.readyState === 'loading' ) {
				window.addEventListener( 'DOMContentLoaded', init );
			} else {
				init();
			}
		}
)();
