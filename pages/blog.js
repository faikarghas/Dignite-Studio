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
            <div className="commentbox" />
        );
    }
}

export default Blog