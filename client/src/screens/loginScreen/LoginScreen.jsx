import React from 'react'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Alert from '../../components/shared/alert/Alert'

const LoginScreen = () => {
  return (
    <section className='container'>

      <Alert type={'danger'}  text={"Identifiants de connnection non valide"}/>
         <h1 className='large text-primary'>Connexion</h1>
         <p className='lead'> <FaUser/> Connectez vous pour commencer </p>

          <form className='form'>
          
            <div className="form-group">
              <input type="email" placeholder="Adresse email" name="email" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Votre mot de passe" name="password" required minLength={6}/>
            </div>
           
            <input type="submit" className="btn btn-primary" value="Connexion" />
          </form>
          <p className="my-1 s-small ">
            Pas encore inscrit? <Link to="/register">S'inscrire</Link>
          </p>
    </section>
  )
}

export default LoginScreen