var React = require('react/addons');
var PostStore = require('../stores/PostStore');

var SinglePostView = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },

    componentDidMount : function() {
        PostStore.listen(this.onChange);
    },

    componentWillUnmount : function() {
        PostStore.unlisten(this.onChange);
    },

    onChange : function(state) {
        this.setState(state);
    },

    getInitialState : function() {
        return PostStore.getState();
    },

    render : function() {
        return (
            <main className="full-post">
                <section>
                    <time className="post-date">{this.state.currentPost.date}</time>
                    <h1 className="post-title">{this.state.currentPost.title}</h1>
                    <div className="author-details">
                        <span className="author-name">By {this.state.currentPost.author.name}</span>
                    </div>
                    <div className="post-content">
                        <p>{this.state.currentPost.description}</p>
                    </div>
                </section>
            </main>
        )
    }
});

module.exports = SinglePostView;