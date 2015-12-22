var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var Link = require('react-router').Link;
var PostActions = require('../actions/PostActions');

var Header = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },

    showAllPosts : function(e) {
        e.preventDefault();
        PostActions.loadAllPosts((function() {
           this.context.router.transitionTo('postListView');
        }).bind(this));
    },

    render : function() {
        return (
            <header className="header">
                <div className="center">
                    <figure><a href="/" onClick={this.showAllPosts}><img className="profile-img" src="/images/avatar.jpg"/></a></figure>
                    <h1>Sonia Brahmi</h1>
                </div>
            </header>
        )
    }
});

module.exports = Header;