/**
 * External dependencies.
 */
import { Component } from '@wordpress/element';
import { divide, findLastIndex } from 'lodash';
import { Icon } from '@iconify/react';


class Post_Picker_Field extends Component {
	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */

     handleChange = ( e ) => {
		const { id, onChange } = this.props;

		onChange( id, e.target.value );
	}
    togglePassword(e) {
        let x = e.target;
        let parent = x.parentElement;
        let input = parent.childNodes[0];

        if (input.type === "password") {
          input.type = "text";
        } else {
          input.type = "password";
        }
    }

	render() {
        const {
			id,
			name,
			value,
		} = this.props;
        const { handleChange } = this;
        const { togglePassword } = this;

		return (
            <>
                <div className="input-wrapper d-flex nowrap align-items-center">
			    <input 
                    value={value}
                    style={{width:"100%"}} 
                    type="password"
                    id={id}
                    name={name}
                    onChange={this.handleChange}
                    />
                    <Icon className="wolfie-icon" onClick={this.togglePassword} icon="fa-regular:eye-slash" />
                </div>
            </>
		);
	}
}

export default Post_Picker_Field;
