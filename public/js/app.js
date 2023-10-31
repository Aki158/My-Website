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
    request.open("GET", "public/json/portfolio.json");
    request.responseType = "json";
    request.send();
    request.onload = function() {
        const portfolio_hashmap_arr = JSON.parse(JSON.stringify(request.response));

        for (var i = 0; i < Object.keys(portfolio_hashmap_arr).length; i++) {
            render_portfolio(i,portfolio_hashmap_arr,document.getElementById("portfolio"));
        }

        for (var i = 0; i < Object.keys(portfolio_hashmap_arr).length; i++) {
            render_table(i,portfolio_hashmap_arr,document.getElementById("table_of_contents"));
        }
        
    }
});

function render_table(index,portfolio_hashmap_arr,table){
    const list = document.createElement("li");
    const list_index = document.createElement("span");
    const list_link = document.createElement("a");

    const list_link_str = "#portfolio"+portfolio_hashmap_arr[index].id;

    list_index.innerHTML = portfolio_hashmap_arr[index].id < 10 ? "0"+portfolio_hashmap_arr[index].id : portfolio_hashmap_arr[index].id;
    list_link.href = list_link_str;
    list_link.textContent = portfolio_hashmap_arr[index].title;

    list_index.classList.add("m-3");
    list_link.classList.add("custom-link");
    list.classList.add("my-3");

    list.append(list_index);
    list.append(list_link);
    table.append(list);
}

function render_portfolio(index,portfolio_hashmap_arr,portfolio){
    const div = document.createElement("div");
    const title = document.createElement("h3");
    const summary = document.createElement("h4");
    const thumbnail = document.createElement("img");
    const langage = document.createElement("h3");
    const langage_body = document.createElement("p");
    const border = document.createElement("p");
    const content = document.createElement("h3");
    const content_body = document.createElement("p");
    const btn_group = document.createElement("div");
    const btn_view = document.createElement("button");
    const btn_source = document.createElement("button");

    div.setAttribute("id", "portfolio"+portfolio_hashmap_arr[index].id);

    title.innerHTML = portfolio_hashmap_arr[index].title;
    summary.innerHTML = portfolio_hashmap_arr[index].summary;
    langage.innerHTML = "言語";
    langage_body.innerHTML = portfolio_hashmap_arr[index].langage;
    content.innerHTML = "説明";
    content_body.innerHTML = portfolio_hashmap_arr[index].content;
    thumbnail.src = portfolio_hashmap_arr[index].thumbnail;
    thumbnail.alt = "No image.";
    
    title.classList.add("text-white","bg-dark","p-3");
    thumbnail.classList.add("img-size","m-3");
    border.classList.add("border-bottom","border-2","border-secondary");
    btn_group.classList.add("btn-group","mb-5");
    btn_view.classList.add("btn","btn-sm","btn-outline-secondary");
    btn_source.classList.add("btn","btn-sm","btn-outline-secondary");

    btn_view.type = "button";            
    btn_view.textContent = 'View';
    btn_view.onclick = view;

    btn_source.type = "button";
    btn_source.textContent = 'Code';
    btn_source.onclick = code;

    function view(){
        window.location.href = portfolio_hashmap_arr[index].view;
    }

    function code(){
        window.location.href = portfolio_hashmap_arr[index].source;
    }

    if(portfolio_hashmap_arr[index].view !== ""){
        btn_group.appendChild(btn_view);
    }
    btn_group.appendChild(btn_source);

    div.append(title);
    div.append(summary);
    div.append(thumbnail);
    div.append(langage);
    div.append(langage_body);
    div.append(border);
    div.append(content);
    div.append(content_body);
    div.append(btn_group);
    portfolio.append(div);
}
