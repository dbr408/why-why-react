import React, {Component} from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

import BlogFeaturesImage from '../blog/blog-featured-image';
import BlogForm from '../blog/blog-form';

export default class BlogDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.match.params.slug,
            blogItem: {},
            editMode: false,
        };

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleFeaturedImageDelete = this.handleFeaturedImageDelete.bind(this);
        this.handleUpdateFormSubmition = this.handleUpdateFormSubmition.bind(this)
    }

    handleUpdateFormSubmition(blog) {
        this.setState({
            blogItem:blog,
            editMode: false
        })
    }

    handleFeaturedImageDelete() {
        this.setState({
            blogItem: {
                feature_image_url: ""
            }
        })
    }

    handleEditClick() {
        if( this.props.loggedInStatus === "LOGGED_IN") {
        this.setState({editMode: true });
        }
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
            feature_image_url,
            blog_status,
        } = this.state.blogItem;

        const contentManager = () => {
            if (this.state.editMode ) {
                return <BlogForm editMode={this.state.editMode} blog={this.state.blogItem} handleFeaturedImageDelete={this.handleFeaturedImageDelete} handleUpdateFormSubmition={this.handleUpdateFormSubmition}/>;
            }else {
                return(
                <div className="content-container">
                    <h1 onClink={this.handleEditClick}>{title}</h1>

                    <BlogFeaturesImage img={featured_image_url} />

                    <div className="content">{ReactHtmlParser(content)}</div>
                </div>
                )
            }
        }

        return (
            <div className="blog-container">{contentManager()}</div>
        );
    }
}