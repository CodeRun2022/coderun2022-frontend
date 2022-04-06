class NewsService {
    baseApiUrl = 'http://localhost:3000/';

    getNews = () => {
        return fetch(this.baseApiUrl+'v2/headlines')
        .then((res) => res.json())
        .then((results) => results.art)
    }

    searchNews = (searchText) => {
        return fetch(this.baseApiUrl+`v2/search/country/RO/text/${searchText}`)
        .then((res) => res.json())
        .then((results) => results.articles)
    }
}

export default NewsService;