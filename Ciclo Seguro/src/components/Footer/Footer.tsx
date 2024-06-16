import React from 'react'

interface FooterProps {
    hasFooterName?: boolean
}

const Footer = ({ hasFooterName }: FooterProps) => {

    return (
        <footer className='footer' style={{ backgroundColor: "#F2F2F2", height: "5vh", textAlign: "center", position: "sticky", bottom: "0", width: "100%" }}>
            {hasFooterName && (
                <h2>Ciclo Seguro</h2>
            )}
        </footer>
    )
}

export default Footer