import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import useForm from '../../hooks/useForm'
import './signup.scss'

function SignUp() {
  const navigate = useNavigate()

  const sendData = (data) => {
    if (data.password === data.password_confirm) {
      console.log('Password coincide')

      delete data.password_confirm
      axios.post('http://localhost:4000/costumer/register', data)
      .then((response) => {
        if (response.status === 200) {
          data.password = undefined
          console.log(response.data)
          navigate('/login')
        }
      }).catch((error) => {
        console.log(error.message)
      })
    } else {
      console.log('Password no coincide')
      return alert('Las contraseñas no coinciden')
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    name: '',
    lastName: '',
    birthday: '',
    email: '',
    password: '',
    password_confirm: '',
    phone: '',
    city: '',
    addres: '',
    zipCode: '',
  })

  return (
    <main className='form-signin'>
      <form onSubmit={handleSubmit}>

        <img className='img-login' width='150rem' src='https://guiaimpresion.com/wp-content/uploads/2020/06/Logotipo-Amazon.jpg' alt='' />
        <h1 className='h3 mb-3 fw-normal'>Registrate</h1>

        <div className='form-floating my-1'>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            placeholder='John'
            value={input.name}
            onChange={handleInputChange}
          />
          <label htmlFor='name'>Nombre</label>
        </div>

        <div className='form-floating my-1'>
          <input
            type='text'
            className='form-control'
            id='lastName'
            name='lastName'
            placeholder='Doe'
            value={input.lastName}
            onChange={handleInputChange}
          />
          <label htmlFor='lastName'>Apellidos</label>
        </div>

        <div className='form-floating my-1'>
          <input
            type='date'
            min='1910-01-01'
            max='2004-12-31'
            className='form-control'
            id='birthday'
            name='birthday'
            value={input.birthday}
            onChange={handleInputChange}
          />
          <label htmlFor='birthday'>Fecha de Nacimiento</label>
        </div>

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

        <div className='form-floating my-1'>
          <input
            type='password'
            className='form-control'
            id='password_confirm'
            name='password_confirm'
            placeholder='Repeat your Password'
            value={input.password_confirm}
            onChange={handleInputChange}
          />
          <label htmlFor='password_confirm'>Cofirmar Contraseña</label>
        </div>

        <div className='form-floating my-1'>
          <input
            type='tel'
            className='form-control'
            id='phone'
            name='phone'
            placeholder='555-555-5555'
            value={input.phone}
            onChange={handleInputChange}
          />
          <label htmlFor='phone'>Teléfono</label>
        </div>

        <div className='form-floating my-1'>
          <input
            type='text'
            className='form-control'
            id='city'
            name='city'
            placeholder='Ciudad de México'
            value={input.city}
            onChange={handleInputChange}
          />
          <label htmlFor='city'>Ciudad</label>
        </div>

        <div className='form-floating my-1'>
          <input
            type='text'
            className='form-control'
            id='addres'
            name='addres'
            placeholder='Domicilio 123 Col. Centro'
            value={input.addres}
            onChange={handleInputChange}
          />
          <label htmlFor='addres'>Dirección</label>
        </div>

        <div className='form-floating my-1'>
          <input
            type='text'
            pattern='[0-9]{5}'
            maxLength='9'
            className='form-control'
            id='zipCode'
            name='zipCode'
            placeholder='12345'
            value={input.zipCode}
            onChange={handleInputChange}
          />
          <label htmlFor='zipCode'>Código Postal</label>
        </div>

        <button
          className='w-100 btn btn-lg btn-primary my-3'
          type='submit'
        >
          Registrarse
        </button>

        <p className='mt-5 mb-3 text-muted'>© 2017 – 2021</p>

      </form>
    </main>
  )
}

export default SignUp
