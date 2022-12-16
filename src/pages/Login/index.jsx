import { useContext } from 'react'
import axios from 'axios'
import useForm from '../../hooks/useForm.js'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.jsx'
import './login.scss'

function Login() {
  const navigate = useNavigate()

  const { loginCostumer } = useContext(AuthContext)

  const sendData = (data) => {
    axios.post('http://localhost:4000/costumer/login', data)
      .then((response) => {
        console.log(response.data)
        
        loginCostumer(response.data.token)
        navigate('/')
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: '',
  })

  return (
    <main className='form-signin'>
      <form onSubmit={handleSubmit}>

        <img className='img-login' width='150rem' src='https://guiaimpresion.com/wp-content/uploads/2020/06/Logotipo-Amazon.jpg' alt='' />
        <h1 className='h3 mb-3 fw-normal'>Iniciar Sesion</h1>

        <div className='form-floating my-1'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            placeholder='email@example.com'
            value={input.email}
            onChange={handleInputChange}
          />
          <label htmlFor='email'>Correo</label>
        </div>

        <div className='form-floating my-1'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            placeholder='Password'
            value={input.password}
            onChange={handleInputChange}
          />
          <label htmlFor='password'>Contraseña</label>
        </div>

        <button
        className='w-100 btn btn-lg btn-primary my-3'
        type='submit'
        >
        Inicia Sesion
        </button>

        <p className='mt-5 mb-3 text-muted'>© 2017 – 2021</p>

      </form>
    </main>
  )
}

export default Login
