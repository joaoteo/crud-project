import axios from 'axios';
import React from 'react';
import { useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom'; //trás o ID. É um hooks também, acessa os parametros de rota e pega os dados do parametro de rotas. a palavra que usamos depois dos dois pontos pode ser qualquer uma.


function UpdatePosts(props){
    <h1>TESTE</h1>
    const {dinossauro} =  useParams()
    console.log( `teste ${useParams()}` )
    console.log(`TESTE ${dinossauro}`)
    const [postById, setpostById] = useState({
        name:'',
        specialty: '',
        description:'',
        pictureUrl:''
    });
    console.log(postById)
    async function getPostById (){

    try{
        
        const postsId = await axios.get(`https://ironrest.herokuapp.com/instahack/${dinossauro}`);
        console.log(postsId)
        console.log(postsId.data)
        setpostById({...postsId.data})
        
    }catch(erro){console.log(erro)}
    }
    useEffect(() => {   
    getPostById()
    }, [])

    console.log(postById)


    //////////////////////////////////////////////////////

    function handleChange(event) {
        setpostById({...postById,
            [event.target.name]: event.target.value
        }) 
    }

    async function handleSubmit (event){
        event.preventDefault()
        delete postById._id 
        try{
            const updatePost = await axios.put(`https://ironrest.herokuapp.com/instahack/${dinossauro}`,postById) //UPDATE
            // setUpdate(updatePost.data)
            console.log(updatePost)
            props.history.push("/")
            }catch(erro){console.log(erro)}          
    }

        return(
            <div className="container-atualizar">                         
                <div key={postById._id}>
                    <form className="update-forms" onSubmit={handleSubmit} >             
                        <label className="campo-form-atualizar"><input className="campo-input"  type="text" name="name" placeholder="Nome" value={postById.name} onChange={ handleChange }></input></label>
                        <label className="campo-form-atualizar"><input className="campo-input"  type="text" name="description" placeholder="Sobre você" value={postById.description} onChange={ handleChange }></input></label>                
                        <label className="campo-form-atualizar"><input className="campo-input"  type="text" name="specialty" placeholder="Especialidade" value={postById.specialty} onChange={ handleChange }></input></label>                
                        <label className="campo-form-atualizar"><input className="campo-input"  type="URL" name="pictureUrl" placeholder="URL da sua foto :D ex: https://pngwing.com/pngs/905/1020/sponge.png" value={postById.pictureUrl} onChange={ handleChange }></input></label>
                        <div className="button-update">
                        <button type="submit" className="btn btn-outline-primary btn-sm">Atualizar</button>
                        <button className="btn btn-outline-warning btn-sm" to="/">Voltar</button>  
                        
                        </div>
                    </form>                                     
                 </div>              
            </div>
    );


}



export default UpdatePosts;