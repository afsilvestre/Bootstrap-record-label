(function() {

    //Header fetch
    fetch("./components/header.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("header").innerHTML = data;
        });

})();
