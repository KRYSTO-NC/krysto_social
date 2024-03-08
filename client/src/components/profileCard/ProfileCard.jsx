import './profileCard.css'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProfileCard = ({ profile }) => {
  return (
    <div className="profile bg-light my-3">
      <img
        src={profile.user.avatar}
        alt=""
        className="round-img"
      />
      <div>
        <h2>{profile.user.name}</h2>
        <p>{profile.status} chez {profile.company} </p>
        <p>{profile.location}</p>
        <Link to={`/profile/user/${profile.user._id}`} className="btn btn-primary">
          Voir le profil
        </Link>
      </div>
      <ul>
      {profile.skills.map((skill, index) => (
        <li key={index} className="text-primary">
          <FaCheck /> {skill}
        </li>
      ))}
    </ul>
    </div>
  )
}

export default ProfileCard
