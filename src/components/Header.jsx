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
                    <h2>Sonia Brahmi</h2>
                    <section className="social-container">
                        <ul>
                            <li><a href="https://www.linkedin.com/in/soniabrahmi" target="_blank" className="social-link"><img src="/images/social-icons.svg#svgView(viewBox(0, 0, 150, 150))"></img><span>View Linkedin</span></a></li>
                            <li><a href="https://www.hackerrank.com/soniabrahmi" target="_blank" className="social-link"><img src="/images/social-icons.svg#svgView(viewBox(0, 150, 150, 150))"></img><span>View Hackerrank</span></a></li>
                            <li><a href="https://github.com/soniabrami" target="_blank" className="social-link"><img src="/images/social-icons.svg#svgView(viewBox(150, 0, 150, 150))"></img><span>View Github</span></a></li>
                        </ul>
                    </section>
                </div>
            </header>
        )
    }
});

module.exports = Header;