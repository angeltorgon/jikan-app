import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Search from "../components/Search";
import Results from "../components/Results";
import Loader from "react-loader-spinner";

// COMPONENTS
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./styles/home.css";

const Home: React.FC<any> = (props) => {
    const { pathname } = useLocation();
    const [currentPage, setCurrentPage] = useState(1);
    const [results, setResults] = useState<[]>([]);
    const [input, setInput] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input.length > 0) {
            setIsLoading(true);
            const requestURL = `https://api.jikan.moe/v3/search/anime?q=${input}&page=${currentPage}`;
            axios
                .get(requestURL)
                .then((res) => {
                    setResults(res.data.results);
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    if (isLoading) {
        return (
            <div className="home-container">
                <Loader
                    type="TailSpin"
                    color="red"
                    height={100}
                    width={100}
                    timeout={5000} //3 secs
                />
            </div>
        );
    }

    return (
        <div className={`home-container ${results.length > 0 ? "home-container-results" : null}`}>
          <div>
            <Search
                input={input}
                setInput={setInput}
                handleSubmit={handleSubmit}
            />
          </div>
            {results.length > 0 ? <Results results={results}/> : null}
        </div>
    );
};

export default Home;
