import React from "react";
import {useParams} from "react-router-dom";

function News(){

    const {newsId} = useParams;
    return(
        <div>
            **News** {newsId}
        </div>
    )
}

export default News;
   

