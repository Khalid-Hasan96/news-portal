const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.data))
}

const displayCategories = categories => {
    const categoriesContainer = document.getElementById('categories-container');
    categoriesContainer.innerHTML =
        `
    <div class="d-flex justify-content-between">
        <button type="button" class="btn btn-outline-primary">Home</button>
        <button type="button" class="btn btn-outline-primary">${categories.news_category[0].category_name}</button>
        <button type="button" class="btn btn-outline-primary">${categories.news_category[1].category_name}</button>
        <button type="button" class="btn btn-outline-primary">${categories.news_category[2].category_name}</button>
        <button type="button" class="btn btn-outline-primary">${categories.news_category[3].category_name}</button>
        <button type="button" class="btn btn-outline-primary">${categories.news_category[4].category_name}</button>
        <button type="button" class="btn btn-outline-primary">${categories.news_category[5].category_name}</button>
        <button type="button" class="btn btn-outline-primary">${categories.news_category[6].category_name}</button>
        <button type="button" class="btn btn-outline-primary">${categories.news_category[7].category_name}</button>
    </div>
    `;
}

const loadNews = () => {
    const url = `https://openapi.programming-hero.com/api/news/category/02`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data.data))
}

const displayNews = allNews => {
    const newsContainer = document.getElementById('news-container');
    allNews.forEach(news => {
        console.log(news);
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title">${news.title}</h3>
                        <p class="card-text">${news.details.slice(0, 200)}....</p>
                        <div class="d-flex justify-content-evenly align-items-center">
                            <img src="${news.author.img}" width="40px" height="40px" class="rounded-circle">
                            <p><small>${news.author.name ? news.author.name : 'No data found'}</small></p>
                        </div>
                        <div>
                            <p><i class="fa-solid fa-eye"></i>${news.total_view ? news.total_view : 'No data'}</p>
                        </div>
                    </div >
                </div >
            </div >
        </div >
    `;
        newsContainer.appendChild(newsDiv);
    });
}
loadNews()
loadCategories()