/**
 * External dependencies.
 */
import { registerFieldType } from '@carbon-fields/core';

/**
 * Internal dependencies.
 */
import './style.scss';
import Post_Picker_Field from './main';

registerFieldType( 'post-picker', Post_Picker_Field );
