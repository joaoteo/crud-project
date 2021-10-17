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
        <div className="row">       
            {/* <Link to="/create-posts">+</Link> */}
        {posts.map((element) => {
                return (           

                    <div className="col-4">
                    <div key={element._id} className="card" style={{width: "21rem", fontColor: "red"}}>
                            <img src={element.pictureUrl} className="card-img-top img-fluid" style={{maxWidth:"400px"}}/>
                            <div className="card-body" style={{height:"230px", width:"280px"}} >
                                <h3 className="card-title">{element.name}</h3>
                                <p className="card-text">{element.description}</p>
                                <p className="card-text">{element.specialty}</p>             
                                
                                <div className="button-card">
                                <Link to={`/create-posts/${element._id}`} className="btn btn-outline-primary">Criar</Link>
                                <Link to={`/update-posts/${element._id}`} className="btn btn-outline-warning">Atualizar</Link>
                                <Link to={`/delete-posts/${element._id}`} className="btn btn-outline-danger">Excluir</Link>
                                </div>
                            </div>
                            {/* <h1>TESTESSSSSSS</h1> */}
                        </div>



                    </div>
            )
        })                 
    }        
        </div>
);
}


export default GetPosts;