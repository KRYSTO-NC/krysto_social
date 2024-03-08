import { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { setCredentials } from '../../slices/authSlice'
import { useRegisterMutation } from '../../slices/userApiSlice'

const RegisterScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [register, { isLoading }] = useRegisterMutation()
  const { userInfo } = useSelector((state) => state.auth)
  const { search } = useLocation()
  const sp = new URLSearchParams(search)
  const redirect = sp.get('redirect') || '/'

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, redirect, userInfo])

  const submitHandler = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      console.log('les mots de passe ne correspondent pas')
    } else {
      try {
        const res = await register({ name, email, password }).unwrap()
        dispatch(setCredentials({ ...res }))
        navigate(redirect)
      } catch (err) {
        console.log(err)
      }
    }
  }
  return (
    <section className="container">
      <h1 className="large text-primary">S'inscrire</h1>
      <p className="lead">
        {' '}
        <FaUser /> Créer un compte{' '}
      </p>

      <form className="form" onSubmit={submitHandler}>
        <div className="form-group">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nom"
            id="name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Adresse email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <small className="form-text">
            Ce site utilise Gravatar, donc si vous voulez une image de profil,
            utilisez un email{' '}
            <Link target="_blank" to={'https://gravatar.com/'}>
              Gravatar
            </Link>
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Votre mot de passe"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="confirmer votre mot de passe"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            minLength={6}
            required
          />
        </div>
        <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              S'inscrire
            </button>
          </div>
      </form>
      <p className="my-1 s-small ">
        Vous avez déjà un compte? <Link to="/login">Connexion</Link>
      </p>
    </section>
  )
}

export default RegisterScreen
