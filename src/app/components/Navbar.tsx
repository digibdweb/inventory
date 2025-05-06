import Navlink from "./Navlink"

const Navbar = () => {
  return (
    <nav className="flex space-x-4  pb-0 text-white">
        <Navlink href="/" exact>Home</Navlink>
        <Navlink href="/about">About</Navlink>
        <Navlink href="/contact">Contact</Navlink>
        <Navlink href="/equipment">Equipment</Navlink>
        <Navlink href="/barcode">Barcode</Navlink>
    </nav>
  )
}

export default Navbar