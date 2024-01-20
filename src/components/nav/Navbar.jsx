import { NavLink } from "react-router-dom"


const Navbar = () => {
const setActiveClass = ({ isActive}) => (isActive? "active" : undefined)


  return (
    <div className="nav">
        <NavLink className={setActiveClass} to="/">
            Home
        </NavLink>

        <NavLink className={setActiveClass} to="/pokemones">
            Pokemones
        </NavLink>

    </div>
  )
}

export default Navbar