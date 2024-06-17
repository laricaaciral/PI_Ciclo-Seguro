import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/AuthContext';


const Dashboard: React.FC = () => {
    const { logout } = useAuth(); 
    const navigate = useNavigate(); 

    const handleLogout = () => {
        logout(); 
        navigate('/'); 
    };

    return (
        <div className="home-logged-in-container" style={styles.container}>
            <button style={styles.logoutButton} onClick={handleLogout}>
                Logout
            </button>
            <h2 style={styles.title}>Registro de Ciclo</h2>
            <h3 style={styles.subtitle}>Mês</h3>
            <div style={styles.calendarContainer}>
                <div style={styles.circle}>
                    <button style={styles.innerCircle}></button>
                </div>
            </div>
            <div style={styles.formContainer}>
                <label style={styles.label}>Fluxo</label>
                <select style={styles.select}>
                    <option value="leve">Leve</option>
                    <option value="moderado">Moderado</option>
                    <option value="intenso">Intenso</option>
                </select>
                <label style={styles.label}>Sintomas</label>
                <select style={styles.select}>
                    <option value="nenhum">Nenhum</option>
                    <option value="cólicas">Cólicas</option>
                    <option value="dor de cabeça">Dor de cabeça</option>
                    <option value="fadiga">Fadiga</option>
                </select>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#F8BBD0',
        padding: '20px',
    } as React.CSSProperties,
    logoutButton: {
        alignSelf: 'flex-end',
        fontSize: '16px',
        background: 'none',
        border: 'single',
        cursor: 'pointer',
        marginBottom: '10px',
    } as React.CSSProperties,
    title: {
        fontSize: '24px',
        color: '#000000',
        marginBottom: '10px',
    } as React.CSSProperties,
    subtitle: {
        fontSize: '18px',
        color: '#000000',
        marginBottom: '20px',
    } as React.CSSProperties,
    calendarContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
    } as React.CSSProperties,
    circle: {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        border: '2px solid #000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    } as React.CSSProperties,
    innerCircle: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#F06292',
        border: 'none',
        cursor: 'pointer',
    } as React.CSSProperties,
    formContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    } as React.CSSProperties,
    label: {
        fontSize: '16px',
        color: '#000000',
        marginBottom: '5px',
    } as React.CSSProperties,
    select: {
        width: '80%',
        padding: '10px',
        marginBottom: '15px',
        borderRadius: '5px',
        border: '1px solid #ddd',
    } as React.CSSProperties,
};

export default Dashboard;
