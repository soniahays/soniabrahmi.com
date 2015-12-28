var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var Link = require('react-router').Link;
var PostActions = require('../actions/PostActions');

var PostPreview = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },

    loadPost : function(e) {
        e.preventDefault();
        var self = this;
        PostActions.loadSinglePost(this.props.post.id, function() {
           self.context.router.transitionTo('/post/' + self.props.post.id + '/' + self.props.post.slug);
        });
    },

    render : function() {
        return (
            <article className="post-preview">
                <a href="#" className="single-post" onClick={this.loadPost}>
                    <h6 className="post-category">{this.props.post.category}</h6>
                    <h1 className="post-title">{this.props.post.title}</h1>
                    <div className="author-details">
                        <span className="author-name">by {this.props.post.author.name}</span>
                    </div>
                    <p className="post-description">{this.props.post.description}</p>
                </a>
            </article>
        )
    }
});

module.exports = PostPreview;