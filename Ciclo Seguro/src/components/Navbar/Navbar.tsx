import React from 'react'

interface NavbarProps {
    hasBackButton?:boolean
}

const Navbar = ({hasBackButton}:NavbarProps) => {
    return (
        <header className='navbar' style={{ backgroundColor: "#D97373", height: "5vh", textAlign: "center", position: "sticky", top: "0", width: "100%" }}>
        
            {hasBackButton && (<button>{`<`}</button>)}
            
        </header>
    )
}

export default Navbar