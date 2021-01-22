console.log("hola")

myGetFunction = () => {
    fetch('http://localhost:3000')
        .then(response => response.json())
        .then(data => {
            data.desc.articles.map((article) => {
                console.log(article.author)

                let container = document.createElement("div");
                let element = document.createElement("p");
                element.appendChild(document.createTextNode(`${article.author}`));
                container.appendChild(element);
                document.getElementById("author").appendChild(container);
            })

        });
}

myPostFunction = () => {
    let theme = document.getElementById("theme").value
    fetch(`http://localhost:3000/${theme}`, {
        method: 'POST', // or 'PUT'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.desc.articles.map((article) => {
            console.log(article.content)

            let container = document.createElement("div");
            let element = document.createElement("p");
            let h1 = document.createElement("h1")
            element.appendChild(document.createTextNode(`${article.content}`));
            h1.appendChild(document.createTextNode(`${article.author}`));
            container.appendChild(h1);
            container.appendChild(element);
            document.getElementById("content").appendChild(container);
        })
    })
}