import React from 'react'
import { FaConnectdevelop } from 'react-icons/fa'
import ProfileCard from '../../components/profileCard/ProfileCard'
import { useGetProfilesQuery } from '../../slices/profileApiSlice'

const DevScreen = () => {
  const { data: profiles, isLoading, isError } = useGetProfilesQuery()
  console.log(profiles)

  return (
    <div className="container">
      {isLoading ? (
        <p>chargement...</p>
      ) : isError ? (
        <p>Une erreur est survenue</p>
      ) : (
        <>
          <h1 className="large text-primary">Les Artisans</h1>
          <p className="lead">
            {' '}
            <FaConnectdevelop /> Explorer et se connecter avec d'autres
            atisans et producteur locaux.
          </p>
          <div className="profiles">
            {profiles.map((profile) => (
              <ProfileCard key={profile._id} profile={profile} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default DevScreen
