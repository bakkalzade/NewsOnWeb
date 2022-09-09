import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";


function Post() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);

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
                            <Link to = {"/news/"+post.id}>
                            <span className="card-title">
                                {post.title}
                            </span>
                            </Link>
                            <p>{post.text.substring(0,100)}...</p>
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
                
                {postListt}
            </div>
        </div>

    }
}

export default Post;