import axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function CreatePosts(props) {
    
    const [formulario, setFormulario] = useState({
        // id:'',
        name:'',
        specialty: '',
        description:'',
        pictureUrl:''

    });

    function handleChange(event) {
        setFormulario({...formulario,
            [event.target.name]: event.target.value
        }) 

    
    }

//const history = useHistory();


        async function handleSubmit (event){
            event.preventDefault()
            try{
            const response = await axios.post('https://ironrest.herokuapp.com/instahack/', formulario) //CREATE
            console.log(response)
            props.history.push("/")
            }catch(erro){console.log(erro)}            
        }

    return(
        <div>
            <form onSubmit={handleSubmit} > 
                <label>Name: <input type="text" name="name" placeholder="Contact Name" value={formulario.name} onChange={ handleChange }></input></label>
                <label>Description: <input type="text" name="description" placeholder="Description" value={formulario.description} onChange={ handleChange }></input></label>                
                <label>Specialty: <input type="text" name="specialty" placeholder="Specialty" value={formulario.specialty} onChange={ handleChange }></input></label>                
                <label>Picture: <input type="URL" name="pictureUrl" placeholder="Picture URL" value={formulario.pictureUrl} onChange={ handleChange }></input></label>
                <div className="button">
                <button type="submit">Criar Post</button>
                <Link to="/">Home</Link>
                </div>
            </form>  
        </div>
    );
}


export default CreatePosts;