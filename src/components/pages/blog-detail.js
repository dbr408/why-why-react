import React, {Component} from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

import BlogFeaturesImage from '../blog/blog-featured-image';

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

                <BlogFeaturesImage img={featured_image_url} />

                <div className="content">{ReactHtmlParser(content)}</div>
                </div>
            </div>
        )
    }
}