import React, { Component } from 'react';

export default class navigationComponent extends Component {
    constructor() {
      super();
    }

    render() {
        return (
            <div>
               <button>Home</button>
               <button>About</button>
               <button>Contact</button>
               <botton>Blog</botton>
               <botton>Add Blog</botton>
            </div>
      );
    }
}