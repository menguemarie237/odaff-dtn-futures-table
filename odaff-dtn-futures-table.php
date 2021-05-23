<?php
/**
 * Plugin Name:       Block: DTN Futures Table
 * Description:       A block for Gutenberg to display DTN Content's Futures Table.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Koch Communications
 * Author Uri:        https://kochcomm.com
 * Text Domain:       odaff
 *
 * @package           odaff
 */


add_action( 'init', function() {
	wp_register_script(
		'dtn-futures-table',
		'https://content-services.dtn.com/ui-widgets/futures-table-widget/futures-table-widget-1.0-latest.js'
	);
	wp_register_script(
		'dtn-futures-table-front',
		plugin_dir_url( __FILE__ ) . '/front-end.js',
		[ 'dtn-news-list' ],
		false,
		true
	);
	register_block_type_from_metadata( __DIR__ );
} );

add_action( 'enqueue_block_assets', function () {
	wp_enqueue_script( 'dtn-futures-table' );
	if ( ! is_admin() ) {
		wp_enqueue_script( 'dtn-futures-table-front' );
	}
} );

add_action( 'block_categories', function ( $categories ) {
	foreach ( $categories as $category ) {
		if ( $category['slug'] === 'odaff' ) {
			return $categories;
		}
	}

	return array_merge(
		$categories,
		[
			[
				'slug'  => 'odaff',
				'title' => __( 'ODAFF', 'odaff' ),
			]
		]
	);
} );
