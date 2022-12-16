import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import './navbar.scss'

function Navbar() {
  const { costum } = useContext(AuthContext)

  console.log(costum)

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark p-3' aria-label='Ninth navbar example'>
      <div className='container'>

        <Link className='navbar-brand' to='/'>Inmuebles LL</Link>

        <div className='collapse navbar-collapse' id='navbarsExample07XL'>

          <ul className='navbar-nav'>

          <li className='nav-item dropdown'>
            <Link className='nav-link active mx-3' to='/' data-bs-toggle='dropdown'>Comprar</Link>

            <ul className='dropdown-menu Navbar__Compras'>
              <li>
                <p className='mx-3 my-3'><strong>Ciudad</strong></p>
                <Link className='dropdown-item' to='/'>Benito Juarez</Link>
                <Link className='dropdown-item' to='/'>Alvaro Obregon</Link>
                <Link className='dropdown-item' to='/'>Cuauhtemoc</Link>
                <Link className='dropdown-item' to='/'>Miguel Hidalgo</Link>
                <Link className='dropdown-item' to='/'>Coyoacan</Link>
              </li>

              <hr />

              <li>
                <p className='mx-3 my-3'><strong>Tipo de Propiedad</strong></p>
                <Link className='dropdown-item' to='/'>Departamento</Link>
                <Link className='dropdown-item' to='/'>Casa</Link>
                <Link className='dropdown-item' to='/'>Casa en condominio</Link>
                <Link className='dropdown-item' to='/'>Terreno / Lote</Link>
                <Link className='dropdown-item' to='/'>Oficina</Link>
              </li>

              <hr />

              <li>
                <p className='mx-3 my-3'><strong>Habitaciones</strong></p>
                <Link className='dropdown-item' to='/'>1 Habitacion</Link>
                <Link className='dropdown-item' to='/'>2 Habitaciones</Link>
                <Link className='dropdown-item' to='/'>3 Habitaciones</Link>
                <Link className='dropdown-item' to='/'>4 Habitaciones</Link>
                <Link className='dropdown-item' to='/'>5 o mas Habitaciones</Link>
              </li>

            </ul>
          </li>

            <li className='nav-item dropdown'>
              <Link className='nav-link active mx-3' to='/' data-bs-toggle='dropdown'>Rentar</Link>

              <ul className='dropdown-menu Navbar__Compras'>
                <li>
                  <p className='mx-3 my-3'><strong>Ciudad</strong></p>
                  <Link className='dropdown-item' to='/'>Benito Juarez</Link>
                  <Link className='dropdown-item' to='/'>Alvaro Obregon</Link>
                  <Link className='dropdown-item' to='/'>Cuauhtemoc</Link>
                  <Link className='dropdown-item' to='/'>Miguel Hidalgo</Link>
                  <Link className='dropdown-item' to='/'>Coyoacan</Link>
                </li>

              <hr />

                <li>
                  <p className='mx-3 my-3'><strong>Tipo de Propiedad</strong></p>
                  <Link className='dropdown-item' to='/'>Departamento</Link>
                  <Link className='dropdown-item' to='/'>Casa</Link>
                  <Link className='dropdown-item' to='/'>Casa en condominio</Link>
                  <Link className='dropdown-item' to='/'>Terreno / Lote</Link>
                  <Link className='dropdown-item' to='/'>Oficina</Link>
                </li>

              <hr />

                <li>
                  <p className='mx-3 my-3'><strong>Habitaciones</strong></p>
                  <Link className='dropdown-item' to='/'>1 Habitacion</Link>
                  <Link className='dropdown-item' to='/'>2 Habitaciones</Link>
                  <Link className='dropdown-item' to='/'>3 Habitaciones</Link>
                  <Link className='dropdown-item' to='/'>4 Habitaciones</Link>
                  <Link className='dropdown-item' to='/'>5 o mas Habitaciones</Link>
                </li>

              </ul>
            </li>

            <li className='nav-item dropdown'>
              <Link className='nav-link active mx-3' to='/' data-bs-toggle='dropdown'>Temporal</Link>

              <ul className='dropdown-menu Navbar__Compras'>
                <li>
                  <p className='mx-3 my-3'><strong>Ciudad</strong></p>
                  <Link className='dropdown-item' to='/'>Benito Juarez</Link>
                  <Link className='dropdown-item' to='/'>Alvaro Obregon</Link>
                  <Link className='dropdown-item' to='/'>Cuauhtemoc</Link>
                  <Link className='dropdown-item' to='/'>Miguel Hidalgo</Link>
                  <Link className='dropdown-item' to='/'>Coyoacan</Link>
                </li>

              <hr />

                <li>
                  <p className='mx-3 my-3'><strong>Tipo de Propiedad</strong></p>
                  <Link className='dropdown-item' to='/'>Departamento</Link>
                  <Link className='dropdown-item' to='/'>Casa</Link>
                  <Link className='dropdown-item' to='/'>Casa en condominio</Link>
                  <Link className='dropdown-item' to='/'>Terreno / Lote</Link>
                  <Link className='dropdown-item' to='/'>Oficina</Link>
                </li>

              <hr />

                <li>
                  <p className='mx-3 my-3'><strong>Habitaciones</strong></p>
                  <Link className='dropdown-item' to='/'>1 Habitacion</Link>
                  <Link className='dropdown-item' to='/'>2 Habitaciones</Link>
                  <Link className='dropdown-item' to='/'>3 Habitaciones</Link>
                  <Link className='dropdown-item' to='/'>4 Habitaciones</Link>
                  <Link className='dropdown-item' to='/'>5 o mas Habitaciones</Link>
                </li>

              </ul>
            </li>
            
            <li className='nav-item dropdown'>
              <Link className='nav-link active mx-3' to='/' data-bs-toggle='dropdown'>Servicios</Link>

              <ul className='dropdown-menu'>
                <li>
                  <Link className='dropdown-item' to='/'>Action</Link>
                </li>

                <li>
                  <Link className='dropdown-item' to='/'>Another action</Link>
                </li>

                <li>
                  <Link className='dropdown-item' to='/'>Something else here</Link>
                </li>

              </ul>
            </li>

            <li className='nav-item'>
              <Link className='nav-link active mx-3' aria-current='page' to='/'>Desarrollos</Link>
            </li>
          </ul>

        </div>

      <div className='Navbar__link mx-4'>
        <Link to='/logout'>
          Publicar(Cerrar Sesion)
        </Link>
      </div>

      <div className='Navbar__link mx-4'>
        <Link to='/signup'>
          Registrate
        </Link>
      </div>

      <div className='Navbar__link mx-4'>
        <Link to='/login'>
          Iniciar Sesion
        </Link>
      </div>

      </div>
    </nav>
  )
}

export default Navbar
