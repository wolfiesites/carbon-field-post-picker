/**
 * External dependencies.
 */
import apiFetch from '@wordpress/api-fetch';
import { Component } from '@wordpress/element';
import { divide, findLastIndex } from 'lodash';
import { Icon } from '@iconify/react';

class Post_Picker_Field extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: ['one','two','trhee'],
            items: ['one','two','trhee'],
            item: "lol"
        };
    }
    /**
     * Renders the component.
     *
     * @return {Object}
     */

    handleChange = (e) => {
        const { id, onChange } = this.props;

        onChange(id, e.target.value);
    }

    fetchPosts = (e) => {
        let items = [];
        apiFetch({ path: '/wp-json/wp/v2/posts' }).then((posts) => {
            posts.forEach(element => {
                let item = {};
                item.id = element.id || '';
                item.title = element.title.rendered || '';
                items.push(item.title);
            });
        });
        return items;
    }
    renderOptions = (items) => {
        let itemsHtml = items.map(function (item) {
            return <option key="{id}" value={item} className="option">{item}</option>
        })

        return itemsHtml;
    }

    render() {
        const {
            id,
            name,
            value,
        } = this.props;
        const { handleChange } = this;
        const { fetchPosts } = this;

        return (
            <>
                <div className="input-wrapper d-flex nowrap align-items-center crb_field">
                    <select name={name} id={id}>
                        {this.renderOptions(this.state.arr)}
                    </select>
                </div>
            </>
        );
    }
    // lifecycle: use to update props
    componentDidMount() {
        let posts = this.fetchPosts();
        this.setState({ items: posts });
    }
}

export default Post_Picker_Field;
