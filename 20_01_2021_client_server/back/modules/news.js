const fetch = require('node-fetch');
const API_KEY = '';

// Home
exports.getAuthor = (req, res) => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            res.status(200).json({ desc: data });
        });
}

exports.postTheme = (req,res) => {
    console.log(req.params.theme)
    let theme = req.params.theme
    fetch(`https://newsapi.org/v2/everything?q=${theme}&apiKey=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            res.status(200).json({ desc: data });
        });
}