import React, {Component} from 'react';
import axios from 'axios';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';

export default class BlogDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.match.params.slug,
            blogItem: {}
        };
    }

    getBlogItem() {
        axios.get(`https://danielbroen.devcamp.space/portfolio/portfolio_blog/${this.currentId}`
        ).then(responce => {
            this.setState({
                blogItem: response.data.portfolio_blog
            })
        }).catch(error => {
            console.log("blog detail 20", error);
        })
    }

    componentDidMount() {
        this.getBlogItem();
    }

    render() {
        const {
            title,
            content,
            feature_images_url,
            blog_status,
        } = this.state.blogItem;
        return (
            <div className="blog-container">
                <div className="content-container">
                <h1>{title}</h1>

                <div className="featured-image-wrapper">
                <img src={feature_images_url} />
                </div>

                <div className="content">{content}</div>
                </div>
            </div>
        )
    }
}