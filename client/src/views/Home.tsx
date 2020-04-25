import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Search from '../components/Search';
import Loader from 'react-loader-spinner';


// COMPONENTS
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './styles/home.css';

const Home: React.FC<any> = (props) => {
    const { pathname } = useLocation();
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ results, setResults ] = useState<[]>([]);
    const [ input, setInput ] = useState<string>("");
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

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
        console.log("props", props)
        if(input.length > 0) {
          setIsLoading(true)
          const requestURL = `https://api.jikan.moe/v3/search/anime?q=${input}&page=${currentPage}`
          axios.get(requestURL)
          .then((res) => {
            setResults(res.data.results);
            setIsLoading(false)
            props.history.push("/results")
            console.log("done loading")
          }).catch((err) => {
            console.error(err);
          })
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    if(isLoading) {
      return (
        <div className="home-container">
          <Loader
            type="TailSpin"
            color="red"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      )
    }


    return (
        <div className="home-container">
            <Search 
            input={input}  
            setInput={setInput}  
            handleSubmit={handleSubmit} />
        </div>
    )
}

export default Home;