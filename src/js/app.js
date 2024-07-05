window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

function scrollToTop() {
     // Safari
    document.body.scrollTop = 0;
    // Chrome, Firefox, IE, and Opera
    document.documentElement.scrollTop = 0;
}

window.addEventListener("load", (event) => {
    request = new XMLHttpRequest();
    request.open("GET", "./json/portfolio.json");
    request.responseType = "json";
    request.send();
    request.onload = function() {
        const portfolio_hashmap_arr = JSON.parse(JSON.stringify(request.response));

        for (var i = 0; i < Object.keys(portfolio_hashmap_arr).length; i++) {
            render_portfolio(i,portfolio_hashmap_arr);
        }
    }
});

function render_portfolio(index,portfolio_hashmap_arr){
    const templete = `
        <div class="bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 p-3 space-y-1">
            <img class="h-auto max-w-full rounded-lg"
                src="${portfolio_hashmap_arr[index].thumbnail}"
                alt="No image."
            />
            <p class="text-sm dark:text-white pt-1">${portfolio_hashmap_arr[index].title}</p>
            <p class="text-sm text-gray-700 dark:text-gray-400">${portfolio_hashmap_arr[index].summary}</p>
            <div class="py-3">
                <a href="${portfolio_hashmap_arr[index].source}" class="mb-1 text-base font-medium p-2 rounded-lg text-white bg-indigo-500 hover:bg-indigo-600">README</a>
            </div>
        </div>`;

    switch (portfolio_hashmap_arr[index].type){
        case 'web-app':
            document.getElementById("web-app").innerHTML += templete;
            break;
        case 'local-app':
            document.getElementById("local-app").innerHTML += templete;
            break;
        case 'game':
            document.getElementById("game").innerHTML += templete;
            break;
        case 'robot':
            document.getElementById("robot").innerHTML += templete;
            break;
        default:
            ;  // 何もしない
    }
}
