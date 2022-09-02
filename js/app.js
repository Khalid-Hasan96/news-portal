const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.data))
}

const displayCategories = categories => {
    console.log(categories);
    const categoriesContainer = document.getElementById('categories-container');
    categoriesContainer.classList.add('container')
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
loadCategories()