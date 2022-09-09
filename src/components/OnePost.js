import React, { useState, Component, useEffect } from "react";
import { GetWithAuth } from "./HttpService";
import { useParams } from "react-router-dom";


function OnePost() {
    const { newsId } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);
    var number = parseInt(newsId , 10);
    
    useEffect(() => {
        fetch("/news")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPostList(result)
                },
                (error) => {
                    console.log(error)
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div> Error !!!</div>;
    } else if (!isLoaded) {
        return <div> Loading... </div>;
    } else {
        const postListt = postList.length ? (
            postList.map(post => {
                return (
                    <div className="card" key={post.id}>
                        <div className="card-content">
                            <span className="card-title">
                                {post.title}
                            </span>
                            <p>{post.text}</p>
                        </div>
                    </div>
                )
            })
        ) : (

            <div className="center"> No Post to Show </div>
        );

        return <div>
            <div className="container">
                <h4 className="center">News</h4>
                
                {postListt[number-1]}
            </div>
        </div>

    }

}
    
    





export default OnePost;