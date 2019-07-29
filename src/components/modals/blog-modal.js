import React, {Component} from 'react';
import ReactModal from 'react-modal';

import BlogForm from "../blog/blog-form";

ReactModal.setAppElement(".app-wrapper");

export default class BlogModal extends Component {
    constructor(props) {
        super(props);

        this.customSStyles = {
            content: {
                top: "50%",
                left: "50%",
                right: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
            },
            overlay: {
                backgroundClolor: "rgba(1, 1, 1, 0.75)"
            }
        }

        this.handleSeccessfillFormSubmission = this.handleSeccessfillFormSubmission.bind(this);
    }

    handleSeccessfillFormSubmission(blog) {
        this.props.handleSeccessfulNewBlogsubmition(blog);
    }

    render() {
        return (
            <ReactModal 
            style={this.customSStyles}
            onRequestClose={() => {
                this.props.handleModalClose();
            }} isOpen={this.props.modalIsOpen}>
                <BlogForm handleSeccessfillFormSubmission= {this.handleSeccessfillFormSubmission} />
            </ReactModal>
        )
    }
}