import axios from "axios";
import React from "react";
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';



function GetPosts(){

    const [posts, setPosts] = useState([]); //
        async function getPosts (){
            
            try{
                const getposts = await axios.get('https://ironrest.herokuapp.com/instahack') //READ
                setPosts(getposts.data)
                console.log(getposts.data)
            }catch(erro){console.log(erro)}
    }
        useEffect(() => {   
            getPosts()
        }, [])

    console.log(posts)
    return(
        <div>
        <h1>HomePage Posts</h1>
            <Link to="/create-posts">Criar Post</Link>
        {posts.map((element) => {
                return (
                                                        
                        <div key={element._id} className="card" style={{width: "18rem", fontColor: "red"}}>
                            <img src={element.pictureUrl} className="card-img-top" alt="Pitcture"/>
                            <div className="card-body">
                                <h5 className="card-title">{element.name}</h5>
                                <p className="card-text">{element.description}</p>
                                <p className="card-text">{element.specialty}</p>
                                <Link to={`/update-posts/${element._id}`} className="btn btn-primary">Atualizar</Link>
                                <Link to={`/delete-posts/${element._id}`} className="btn btn-danger">Deletar</Link>
                            </div>
                        </div>
                    
                   
            )
        })                 
    }        
        </div>
);
}


export default GetPosts;