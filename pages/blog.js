import React from 'react';
import commentBox from 'commentbox.io';

class Blog extends React.Component {

    componentDidMount() {

        this.removeCommentBox = commentBox('5644854293954560-proj');
    }

    componentWillUnmount() {

        this.removeCommentBox();
    }

    render() {

        return (
            <React.Fragment>
            <h1>komentar artikel 1</h1>
            <div className="commentbox" id="comment1"/>
            <h1>komentar artikel 2</h1>
            <div className="commentbox" id="comment2"/>
            </React.Fragment>
        );
    }
}

export default Blog