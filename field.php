<?php

use Carbon_Fields\Carbon_Fields;
use Carbon_Field_Post_Picker\Post_Picker_Field;

define( 'Carbon_Field_Post_Picker\\DIR', __DIR__ );

Carbon_Fields::extend( Post_Picker_Field::class, function( $container ) {
	return new Post_Picker_Field(
		$container['arguments']['type'],
		$container['arguments']['name'],
		$container['arguments']['label']
	);
} );
