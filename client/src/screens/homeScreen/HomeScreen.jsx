import React from 'react'
import { Link } from 'react-router-dom'
import './homeScreen.css'
import IconsSection from '../../components/iconsSection/IconsSection'

const HomeScreen = () => {
  return (
    <>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">ArtiConnect NC</h1>
            <p className="lead">
              Explorez, partagez, et soutenez vos producteurs locaux en
              Nouvelle-Calédonie avec ARTICONNECT
              <br />
              la plateforme qui rapproche les communautés et célèbre le
              savoir-faire artisanal et local de Nouvelle-Calédonie.
            </p>
          
            <div className="buttons">
              <Link to="/register" className="btn btn-primary">
                Inscription
              </Link>
              <Link to="/login" className="btn">
                Connexion
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div  className="container">
        <h2 className='large text-primary'>
        Bienvenue sur ArtiConnect NC
        </h2>
        <p className='lead'>
        Votre espace dédié à la découverte des talents locaux et à la connexion avec les producteurs et artisans de la Nouvelle-Calédonie.
        </p>
        </div>

        <div  className="container">
        <h2 className='large text-primary'>
        À propos de ArtiConnect NC
        </h2>
        <p className="lead">
          ArtiConnect NC est une plateforme sociale conçue pour promouvoir l'économie locale en mettant en relation les producteurs et les artisans avec la communauté. Notre mission est de créer un réseau solide qui célèbre la richesse de la Nouvelle-Calédonie.
        </p>

        </div>
        <div  className="container">
        <h2 className='large text-primary'> Créer un compte et découvrez la richesse Calédonienne </h2>
        <p className="lead">
        Créez votre compte dès maintenant pour accéder à un monde de possibilités. Connectez-vous pour partager, liker et découvrir tout ce que nos producteurs et artisans ont à offrir.
        </p>
        </div>

        <IconsSection/>
      
      </section>
    </>
  )
}

export default HomeScreen
