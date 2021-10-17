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
        <div className="container-criar">
            <form className="create-forms" onSubmit={handleSubmit} > 

                <div className="alinhamento-label-form" >
                    <label className="campo-form-criar"><input className="campo-input" type="text" name="name" placeholder="Como você deseja ser chamado?" value={formulario.name} onChange={ handleChange }></input></label>
                    <label className="campo-form-criar"><input className="campo-input"  type="text" name="description" placeholder="Um pouco sobre você" value={formulario.description} onChange={ handleChange }></input></label>                
                    <label className="campo-form-criar"><input  className="campo-input" type="text" name="specialty" placeholder="Qual a sua especialidade?" value={formulario.specialty} onChange={ handleChange }></input></label>                
                    <label className="campo-form-criar"><input className="campo-input"  type="URL" name="pictureUrl" placeholder="URL da sua foto :D ex: https://pngwing.com/pngs/905/1020/sponge.png" value={formulario.pictureUrl} onChange={ handleChange }></input></label>
                </div>
            
            
                <div className="button-create">
                    <button type="submit" className="btn btn-outline-primary btn-sm">Novo Post</button>
                    <button className="btn btn-outline-warning btn-sm" to="/">Voltar</button>                    
                </div>
            </form>  
        </div>
    );
}


export default CreatePosts;