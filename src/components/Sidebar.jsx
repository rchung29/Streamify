import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
import { logo } from '../assets';
import { links } from '../assets/constants';

const NavLinks = () => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink key={item.name} to={item.to} className="flex flex-row justify-center items-center my-8 text-sm font-medium text-gray-500 hover:text-gray-100 duration-150 ease-in-out" onClick={() => handleClick && handleClick()}>
        <item.icon className="w-6 h-6 mr-2 hover:text-white"></item.icon>
        {item.name}
      </NavLink>
    ))}

  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <>
      <div className="md:flex hidden flex-col w-[225px] py-14 px-4 bg-zinc-800">
        <img src={logo} alt="logo" className="w-full h-20 object-contain" />
        <NavLinks/>
      </div>   
      
      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine className="w-6 h-6 text-white mr-2" onClick={()=>setMobileMenuOpen(false)}/>
        ):<HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={()=>setMobileMenuOpen(true)}/>}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-zinc-800/80 backdrop-blur z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' :'-left-full'}`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div> 
    </>
)
}
export default Sidebar;
