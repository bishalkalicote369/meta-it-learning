import Logo from '../assets/images/Logo.png';
import Ham from '../assets/images/hamburger.svg';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full" >
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={Logo} alt="logo" width={400} height={100} />

        </a>
        <ul className="flex-1 flex justify-center items-center mb-2` gap-12 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="fonts-montserrat leading-normal font-bold text-xl text-black  hover:text-coral-red">
                {item.label}

              </a>

            </li>

          ))}
          {/* <button type="button" className="px-8 py-3 text-xl fonts-montserrat font-bold rounded bg-white-800 text-black ">Login</button> */}


        </ul>
        <div className='hidden max-lg:block mb-2'>
          <img src={Ham} alt="Hamburger" width={25} height={25} />

        </div>


      </nav>

    </header>
  )
}

export default Nav