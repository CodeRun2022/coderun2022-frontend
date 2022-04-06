import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Skeleton from '@mui/material/Skeleton';

import NewsService from '../../services/NewsService';

import NewsItem from '../NewsItem/NewsItem';

const News = () => {
    const newsService = new NewsService();

    const [appState, setAppState] = useState({
        loading: false,
        articles: null
    })

    const getFeaturedNews = () => {
        setAppState({loading: true});
        newsService.getNews().then((articles) => {
            setAppState({loading: false, articles: articles})
        })
    }

    useEffect(() => {
        getFeaturedNews();
    }, [])

    const searchNews = (event) => {
        const searchText = event.target.value;

        if(searchText.length > 2) {
            newsService.searchNews(searchText).then((articles) => {
                setAppState({loading: false, articles: articles})
            })
        }

        if(searchText.length === 0) {
            getFeaturedNews();
        }
    }

    const debouncedSearchNews= useCallback(
        debounce(searchNews, 1000)
    , []);

    return (
        <div>
            <Grid container spacing={2} sx={{p: 2}}>
                <Grid item xs={12} md={12} lg={12}>
                    <TextField 
                    onChange={debouncedSearchNews} 
                    label="Search"
                    variant="outlined" 
                    sx={{width: '100%'}}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{p: 2}}>
                {appState.loading ? (
                    <Grid item xs={12}>
                        <Skeleton animation="wave" />
                    </Grid>
                ) : (
                    appState.articles && appState.articles.map(
                        (article, index) => 
                        <Grid key={index} item xs={12} md={6} lg={2}>
                            <NewsItem article={article}></NewsItem>
                        </Grid>
                    )
                )}
            </Grid>
        </div>
    )
}

export default News;