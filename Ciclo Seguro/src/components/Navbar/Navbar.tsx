import './style.css'
import React from 'react'

interface NavbarProps {
    hasBackButton?:boolean
}

const Navbar = ({hasBackButton}:NavbarProps) => {
    return (
        <header className='navbar' style={{ backgroundColor: "#D97373", height:"6vh", display: "flex", alignItems: "center"}}>
        
        {hasBackButton && (<button>{"<"}</button>) }
            
        </header>
    )
}

export default Navbar