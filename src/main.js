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
            items: [],
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

    fetchPosts = () => {
        apiFetch({ path: '/wp-json/wp/v2/posts' }).then((posts) => {
            let items = [];
            posts.forEach(element => {
                let item = {};
                item.id = element.id || '';
                item.title = element.title.rendered || '';
                items.push(item.title);
            });
            // ZAWSZE TUTAJ MUSI BYĆ SET STATE !!!
            this.setState({ items: posts })
        });
    }
    renderOptions = (items) => {
        let itemsHtml = items.map(function (item) {
            return <option key="{id}" value={item} className="option">{item}</option>
        })
        return itemsHtml;
    }
    // To jest lifecycle w klasie
    // w funkcji js jako component zastąpione jest useState i useEffect TODO do doczytania
    componentDidMount() {
        this.fetchPosts();
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
                    {this.state.items.map((item) => (
                        <option key={item.id}>{item.title.rendered}</option>
                    ))}
                    </select>
                </div>
            </>
        );
    }
    // lifecycle: use to update props
    
}

export default Post_Picker_Field;
