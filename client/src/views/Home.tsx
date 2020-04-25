import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Pagination from '../components/Pagination';
import Search from '../components/Search';


// COMPONENTS
import Results from '../components/Results';
import './styles/home.css';

const Home: React.FC<any> = () => {
  const { pathname } = useLocation();
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ results, setResults ] = useState<[]>([]);
    const [ input, setInput ] = useState<string>("");
    const [ category, setCategory ] = useState("anime");

  useEffect(() => {
    const requestURL = `https://api.jikan.moe/v3/top/anime`

    axios.get(requestURL)
    .then((res) => {
      setResults(res.data.top);
      console.log(res.data.top)
    }).catch((err) => {
      console.error(err);
    })
  },[])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(input.length > 0) {
      const requestURL = `https://api.jikan.moe/v3/search/${category}?q=${input}&page=${currentPage}`

      axios.get(requestURL)
      .then((res) => {
        setResults(res.data.results);
      }).catch((err) => {
        console.error(err);
      })
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
    return (
      <div>
        <Search 
        input={input}  
        setInput={setInput}  
        category={category}
        setCategory={setCategory}
        handleSubmit={handleSubmit} />
      </div>
    )
}
export default Home;