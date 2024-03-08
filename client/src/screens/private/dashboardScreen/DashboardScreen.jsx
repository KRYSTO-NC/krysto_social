import { Link } from 'react-router-dom'
import './dashboardScreen.css'
import {
  FaBlackTie,
  FaGraduationCap,
  FaTrash,
  FaUserCircle,
  FaUserMinus,
} from 'react-icons/fa'

const DashboardScreen = () => {
  return (
    <section className="container">
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">Bienvennue John Doe</p>
      <div className="dash-buttons">
        <Link className="btn btn-primary" to={'/create-profile'}>
          {' '}
          <FaUserCircle /> Editer votre profile
        </Link>
        <Link className="btn btn-primary" to={'/add-experience'}>
          {' '}
          <FaBlackTie /> Ajouter une experience
        </Link>
        <Link className="btn btn-primary" to={'/add-education'}>
          {' '}
          <FaGraduationCap /> ajouter une etudes{' '}
        </Link>
      </div>
      <h2 className="my-2">Experience</h2>
      <table className="table">
        <thead>
          <th>Entreprise</th>
          <th className="hide-sm">Titre</th>
          <th className="hide-sm">Période</th>
          <th></th>
        </thead>
        <tbody>
          <tr>
            <td>Tech Guy Web Solutions</td>
            <td className="hide-sm">Senior Developer</td>
            <td className="hide-sm">02-03-2009 - 01-02-2014</td>
            <td>
              <button className="btn btn-danger">
                <FaTrash />
              </button>
            </td>
          </tr>
          <tr>
            <td>Sun Microsysteme</td>
            <td className="hide-sm">Senior Developer</td>
            <td className="hide-sm">02-03-2009 - 01-02-2014</td>
            <td>
              <button className="btn btn-danger">
                <FaTrash />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="my-2">Etudes</h2>
      <table className="table">
        <thead>
          <th>Ecole</th>
          <th className="hide-sm">Degrée</th>
          <th className="hide-sm">Période</th>
          <th></th>
        </thead>
        <tbody>
          <tr>
            <td>Openclasrooms</td>
            <td className="hide-sm">Senior Developer</td>
            <td className="hide-sm">02-03-2009 - 01-02-2014</td>
            <td>
              <button className="btn btn-danger">
                <FaTrash />
              </button>
            </td>
          </tr>
          
        </tbody>
      </table>


      <div className="my-2">
        <button className="btn btn-danger">
          <FaTrash /> Supprimer mon compte
        </button>
      </div>
    </section>
  )
}

export default DashboardScreen
