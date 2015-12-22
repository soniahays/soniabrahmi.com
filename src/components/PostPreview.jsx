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
            <article>
                <a href="#" className="single-post" onClick={this.loadPost}>
                    <div className="post-title">{this.props.post.title}</div>
                    <div className="author-details">
                        <span className="author-name">{this.props.post.author.name}</span>
                    </div>
                </a>
            </article>
        )
    }
});

module.exports = PostPreview;