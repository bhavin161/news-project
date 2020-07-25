console.log('welcome to news');
// variable
// source = 'bbc-news';
// let apiKey = '9bc1acbb043d4f4084e815edc5274f93';
// grab the news
let newsaccordian = document.getElementById('newsaccordian');
// creat a ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `news.txt`, true);

xhr.onload = function (){
    if (this.status === 200){

        let json = JSON.parse(this.responseText);
        let articles = json.articles;

        console.log(articles);

        let newshtml = "";
        articles.forEach(function (element,index){  
                // console.log(element,index);
                let news = `<div class="card">
    <div class="card-header" id="heading${index}">
        <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                <b>  Breaking News ${index + 1}<span class="badge badge-secondary">New</span></b> : ${element["title"]}
        </button>
        </h2>
    </div>

    <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}"
        data-parent="#newsaccordian">
        <div class="card-body">
            ${element["content"]}.<a href="${element.url}" target="_blank">Read more Here</a> 
    </div>
    </div>
</div>`;
                newshtml += news;
            
        });
        newsaccordian.innerHTML = newshtml;
    }
    else { 
        console.log("Some error occured");
    }
}

xhr.send();

