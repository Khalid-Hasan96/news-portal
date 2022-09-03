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
        // console.log(news);
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8 d-flex flex-column">
                    <div class="card-body">
                        <div>
                            <h4 class="card-title">${news.title}</h4>
                            <p class="card-text text-muted">${news.details.slice(0, 200)}....</p>
                        </div>
                    </div> 
                    <div class="card-footer text-muted d-flex justify-content-between">    
                        
                            <div class="d-flex">
                                <img src="${news.author.img ? news.author.img : 'No Author Image'}" width="50px" height="50px" class="rounded-circle">
                                <div>
                                    <p class="fs-6 ps-2">${news.author.name ? news.author.name : 'No Author Found'} <br> <small>${news.author.published_date ? news.author.published_date : 'No date found'}</small></p>
                                    
                                </div>
                            </div>
                            <div>
                                <p class="fs-5"><i class="fa-solid fa-eye"></i>${news.total_view ? news.total_view : 'No data'}</p>
                            </div>
                         
                            <button onclick="loadNewsDetails('${news._id}')" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#newsModal">Read Full News</button>
                                             
                      
                    </div>
                </div>
            </div>
        </div>
    `;
        newsContainer.appendChild(newsDiv);
    });
}

const loadNewsDetails = newsId => {
    const url = `https://openapi.programming-hero.com/api/news/${newsId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayNewsDetail(data.data))
}

const displayNewsDetail = newsDetails => {
    const modalBody = document.getElementById('body-modal');
    modalBody.innerHTML = ``;
    newsDetails.forEach(news => {
        console.log(news);
        const modalTitle = document.getElementById('newsModalLabel');
        modalTitle.innerText = "News Details";
        const bodyContainer = document.createElement('div');
        bodyContainer.innerHTML = `
        <div class="card" >
            <img src="${news.image_url}" class="card-img-top" alt="...">
            <small class="text-muted">Published Date : ${news.author.published_date}</small>
            <h3 class="card-title text-center mt-2">${news.title}</h3>
            <div class="card-body">
                <p class="card-text text-center">${news.details}</p>
            </div>
            <div class="card-footer text-muted text-center">
                <img src="${news.author.img}"  width="50px" height="50px" class="rounded-circle">
                <p>Author : ${news.author.name ? news.author.name : 'No Author Found'}</p>
                <p><small><i class="fa-regular fa-thumbs-up"></i> ${news.rating.number}</small></p>
                <p><small><i class="fa-solid fa-eye"></i> ${news.total_view}</small></p>
            </div>
        </div>
        `;
        modalBody.appendChild(bodyContainer);
    })
}
loadNews()
loadCategories()