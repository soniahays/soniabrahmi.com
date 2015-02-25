var express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    Poet = require('poet'),
    dustjs = require('adaro'),
    hostname = process.env.HOSTNAME || 'localhost',
    port = parseInt(process.env.PORT, 10) || 4567,
    publicDir = process.argv[2] || __dirname + '/public';

var poet = Poet(app, {
    posts: './posts/',
    postsPerPage: 5,
    metaFormat: 'json'
});

poet.watch().init();

app.engine('dust', dustjs.dust({cache: false}));
app.set('view engine', 'dust');

app.get("/", function (req, res) {
    var posts = app.locals.getPosts();
    res.locals = {name: 'Sonia', posts: posts};
    res.render("index");
});

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(publicDir));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

console.log("Simple static server showing %s listening at http://%s:%s", publicDir, hostname, port);
app.listen(port, hostname);
