import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import { useAuth } from '../utils/AuthContext';


const Home = () => {

    const { loggedIn } = useAuth();

    return (

        !loggedIn ?
            (
                <>
                    <div className="home-container" style={styles.container}>

                        <div className="circle" style={styles.circle}></div>
                        <h1 style={styles.title}>Ciclo Seguro</h1>
                        <p style={styles.subtitle}>Tenha o controle do seu ciclo <br /> e uma vida mais segura</p>
                        <div className="button-container" style={styles.buttonContainer}>
                            <Link to="/login">
                                <button style={styles.button}>Já tem conta? Faça login</button>
                            </Link>
                            <Link to="/register">
                                <button style={styles.button}>Crie sua conta</button>
                            </Link>

                        </div>
        </div>
        </>
            ) :

            <Dashboard />

    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
        backgroundColor: '#F8BBD0',

    } as React.CSSProperties,
    circle: {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        backgroundColor: '#FFFFFF',
        marginBottom: '50px',
    } as React.CSSProperties,
    title: {
        fontSize: '40px',
        color: '#000000',
        marginBottom: '20px'
    } as React.CSSProperties,
    subtitle: {
        fontSize: '18px',
        textAlign: 'center',
        color: '#000000',
        marginBottom: '30px',
    } as React.CSSProperties,
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
    } as React.CSSProperties,
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '20px',
        border: 'single',
        cursor: 'pointer',
    } as React.CSSProperties,
};

export default Home;
