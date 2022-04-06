import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from './components/Layout/Layout';
import News from './components/News/News';
import NewsItem from './components/NewsItem/NewsItem';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<News />} />
            <Route path="news">
              <Route path=":newsId" element={<NewsItem />} />
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
