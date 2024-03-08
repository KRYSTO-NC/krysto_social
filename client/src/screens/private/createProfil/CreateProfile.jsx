import React from 'react'
import { FaFacebook, FaInfo, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CreateProfile = () => {
  return (
    <section className="container">
      <h1 className="large text-primary">Créer votre profile</h1>
      <p className="lead">
        <FaInfo /> Ajouter des informations pour que les gens puissent vous
        connaitre
      </p>

      <small>* = champs obligatoire</small>

      <form action="" className="form">

        <div className="form-group">
            <select name="status" id="">
                <option value="0">* Votre status pro</option>
                <option value="1">Développeur</option>
                <option value="2">Développeur Junior</option>
                <option value="3">Développeur Senior</option>
                <option value="4">Manager</option>
                <option value="5">Etudiant ou Apprenant</option>
                <option value="6">Instructeur ou Enseignant</option>
                <option value="7">Intéressé par la programmation</option>
            </select>
            <small>donnez nous une idée sur votre carrière proffesionnel</small>
        </div>

        <div className="form-group">
            <input type="text" placeholder="Société" name="company" />
            <small>Peut être votre propre société ou celle pour laquelle vous travaillez</small>
        </div>

        <div className="form-group">
            <input type="text" placeholder="Site web" name="website" />
            <small>Peut être votre propre site web ou celui de la société pour laquelle vous travaillez</small>
        </div>

        <div className="form-group">
            <input type="text" placeholder="Lieu" name="location" />
            <small>Ville et Pays (ex: Nouméa, Province-Sud)</small>
        </div>

        <div className="form-group">
            <input type="text" placeholder="* Compétences" name="skills" />
            <small>Veuillez utiliser des virgules pour séparer les valeurs (ex: HTML,CSS,JavaScript,PHP)</small>
        </div>

        <div className="form-group">
            <input type="text" placeholder="Github Username" name="githubusername" />
            <small>Si vous voulez afficher vos derniers repos et un lien vers votre profil Github, saisissez votre nom d'utilisateur</small>
        </div>

        <div className="form-group">
            <textarea name="bio" id="" cols="30" rows="5" placeholder="Une petite bio sur vous"></textarea>
            <small>Parlez nous un peu de vous</small>
        </div>

        <div className="form-group">
            <button className="btn btn-light">Ajouter les liens vers vos réseaux sociaux</button>
            <span>Optionnel</span>

        </div>

        <div className="form-group social-input twitter">
           <FaTwitter />
            <input type="text" placeholder="Twitter URL" name="twitter" />
        </div>
        <div className="form-group social-input facebook">
              <FaFacebook />
                <input type="text" placeholder="Facebook URL" name="facebook" />
        </div>
        <div className="form-group social-input linkedin">
              <FaLinkedin/>
                <input type="text" placeholder="Linkedin URL" name="linkedin" />
        </div>
        <div className="form-group social-input youtube">
              <FaYoutube/>
                <input type="text" placeholder="Youtube URL" name="youtube" />
        </div>
        <div className="form-group social-input instagram">
              <FaInstagram />
                <input type="text" placeholder="Instagram URL" name="instagram" />
        </div>
        <input style={{marginRight:"2rem"}} type="submit" className="btn btn-success my-1" />
        <Link className='btn btn-danger my-1'>  
            retour
        </Link>
      </form>
    </section>
  )
}

export default CreateProfile
