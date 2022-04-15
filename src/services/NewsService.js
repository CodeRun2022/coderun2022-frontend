class NewsService {
    baseApiUrl = 'http://localhost:3000/';

    getNews = () => {
        return fetch(this.baseApiUrl+'headlines')
        .then((res) => res.json())
        .then((results) => results.art)
    }

    searchNews = (searchText) => {
        return fetch(this.baseApiUrl+`search/${searchText}`)
        .then((res) => res.json())
        .then((results) => results.articles)
    }
}

export default NewsService;
