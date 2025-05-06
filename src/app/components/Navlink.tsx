"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    href:string;
    exact?: boolean;
    children: React.ReactNode;
    className?: string;
    activeClassName?: string;
}
const Navlink = ({ 
    href, 
    exact=false, 
    children, 
    className="", 
    activeClassName='underline text-blue-600'}:NavLinkProps
)=> {
    const pathname = usePathname();
    const isActive = exact ? pathname == href : pathname.startsWith(href);
  return (
    
    <Link
    href= {href}
    className={`px-3  ${isActive ? "underline underline-offset-4 color:inherit" : "text-white hover:underline underline-offset-4"} ${className}`}
    >
        {children}
    </Link>
  );
};

export default Navlink