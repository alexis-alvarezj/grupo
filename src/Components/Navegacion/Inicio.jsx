import React from 'react'
import "./Styles/Inicio.css"


const Inicio = () => {
  return (
    <div className='color'>
    <div class="card" className='w 25'>
            <img class="card-img-top" src="./lebron.jpg " className='w 25' alt="" />
            <div class="card-body">
                <h5 class="card-title">Lebron</h5>
                <p class="card-text">Jugador profecional de la NBA  </p>
                <input class="btn btn-primary" type="button" value="perfil"/>
                <input class="btn btn-primary" type="button" value="like"/>

<input class="btn btn-primary" type="button" value="dislike"/>
<input class="btn btn-primary" type="submit" value="report"/>
<input class="btn btn-primary" type="reset" value="message"></input>
            </div>
        </div>
        
    </div>
  )
}

export default Inicio