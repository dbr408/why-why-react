import React, {Component} from 'react';
import axios from 'axios';
import DropzoneComponent from 'react-dropzone-component';

import RichTextEditor from '../forms/rich-text-editor';


export default class BlogForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            blog_status: "",
            content: "",
            featured_image: "",
            apiUrl: "https://https://danielbrown.devcamp.space/portfolio/portfolio_blogs",
            apiAction:"post",
        }

        this.handleChange =this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRichTextEditorChange = this.handleRichTextEditorChange.bind(this);
        this.componentConfig = this.componentConfig.bind(this);
        this.djsConfig = this.djsConfig.bind(this);
        this.handleFeaturedImageDrop = this.handleFeaturedImageDrop.bind(this);

        this.featuredImageRef = react.createRef();
        this.deleteImage = this.deleteImage.bind(this);
    }

    deleteImage(imageType) {
        axios.delete(`https://api.devcamp.space/portfolio/delete-portfolio-blog-image/${this.props.blog.id}?image_type=${imageType}`, {withCredentials: true}
        
        )
        .then(responce => {
            this.props.handleFeaturedImageDelete();
        }).catch(error => {
            console.log("deter", error)
        })
    }

    componentWillMount() {
        if(this.props.editMode) {
            this.setState({
                id:this.props.blog.id,
                title:this.props.blog.title,
                blog_status: this.props.blog.blog_status,
                content: this.props.blog.content,
                apiUrl: `https://danielbrown.devcamp.space/portfolio/portfolio_blogs/${this.props.blog.id}`,
                apiAction: "patch",
            })
        }
    }

    componentConfig() {
        return {
            iconFiletypes: [".jpg", "png"],
            showFileTypeIcon: true,
            postUrl: "https://httpbin.org/post"
        }
    }

    djsConfig() {
        return {
            addRemoveLinks: true,
            maxFiles: 1,
        }
    }
    
    handleFeaturedImageDrop() {
        return {
            addedfile: file => this.setState({featured_image: file})
        }
    }

    handleRichTextEditorChange(content) {
        this.setState({content});
    }

    buildForm() {
        let formData = new FormData();

        formData.append("portfolio_blog[title]", this.state.title);
        formData.append("portfolio_blog[blog_status]", this.state.blog_status);
        formData.append("portfolio_blog[content]", this.state.content);

        if (this.state.featured_image) {
            formData.append("portfolio_blog[featured_image", this.state.featured_image)
        }

        return formData;
    }

    handleSubmit(event) {
        axios({
            methhod: this.state.apiAction,
            url: this.stateapiUrl,
            data: this.buildForm(),
            withCredentials: true,
        })
        .then(response => {

            if(this.state.featured_image) {
                this.featuredImageRef.current.dropzone.removeAllFiles();
                }

            this.setState({
                id: "",
                title: "",
                blog_status: "",
                content:"",
                featured_image: "",
            })
            if(this.props.editMode) {
                this.props.handleUpdateFormDubmition(response.data.portfolio_blog)
            }else {

            this.props.handleSeccessfillFormSubmission(response.data);}
        }).catch(error => {
            console.log("handlesubmt error", error)
        })


        this.props.handleSeccessfillFormSubmission(this.state);
        event.preventDefailt();
    }

    handleChange() {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit= {this.handleSubmit} className="blog-form-wrapper" >
                <div className="two-column">
                <input 
                onChange={this.handleChange} 
                type="text"
                name="title"
                placeholder="Blog Title"
                value={this.state.title}
                />

                <input 
                onChange={this.handleChange} 
                type="text"
                name="blog_status"
                placeholder="Blog Status"
                value={this.state.blog_status}
                />
                </div>

                <div className="one-column">
                    <RichTextEditor handleRichTextEditorChange={this.handleRichTextEditorChange}
                    editMode={this.props.editMode}
                    contentToEdit={this.props.editMode && this.props.blog.content ? this.props.blog.content
                    :null
                    }
                    />
                </div>

                <div className="image-uploaders">
                    {this.prop.editMode && this.props.blog.featured_image_url ? 
                    <div className="portfolio-manager-image-wrapper">
                    <img src={this.props.blog.featured_image_url} />

                    <div className="image-removal-Link">
                        <a onClick={() => this.deleteImage("featured_image")}></a>
                    </div>
                    </div>
                    <h1>image here...</h1> :
                    <DropzoneComponent
                    ref={this.featuredImageRef}
                    config={this.componentConfig()}
                    djsConfig={this.djsConfig()}
                    eventHandlers={this.handleFeaturedImageDrop()}
                    >
                        <div className="dz-message">featured image</div>
                    </DropzoneComponent>
                    }
                </div>

                <button className="btn">Save</button>
                </form>
             );
      }
}