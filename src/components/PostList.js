import React from 'react';
import {connect} from 'react-redux';

import { fecthPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {

    componentDidMount() {
        this.props.fecthPostsAndUsers();
    }

    renderPosts() {
        return this.props.posts.map(
            post => {
                return (
                    <div className="item" key={post.id}>
                        <i className="large github middle aligned icon"></i>
                        <div className="content">
                            <h3 className="header">{post.title}</h3>
                            <div className="description">{post.body}</div>
                            <UserHeader userId={post.userId}/>
                        </div>
                    </div>
                );
            }
        );
    }

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderPosts()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
};

export default connect(mapStateToProps, { fecthPostsAndUsers })(PostList);