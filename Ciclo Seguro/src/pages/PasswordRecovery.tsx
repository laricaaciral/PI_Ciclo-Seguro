import React from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordRecovery: React.FC = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Logic to send the password recovery request
        console.log('Password recovery request sent');
    };

    return (
        <div className="recover-container" style={styles.container}>
            <button style={styles.backButton} onClick={handleBack}>{"<"}</button>
            <h2 style={styles.title}>Recuperar Senha</h2>
            <form style={styles.form} onSubmit={handleSubmit}>
                <label style={styles.label}>CPF</label>
                <input type="number" style={styles.input} required />
                <label style={styles.label}>Data de Nascimento</label>
                <input type="date" style={styles.input} required />
                <button type="submit" style={styles.button}>Enviar</button>
            </form>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '900vh',
        backgroundColor: '#F8BBD0',
        padding: '20px',
    },
    backButton: {
        alignSelf: 'flex-start',
        fontSize: '24px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        marginBottom: '10px',
    },
    title: {
        fontSize: '24px',
        color: '#000000',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    label: {
        fontSize: '16px',
        color: '#000000',
        marginBottom: '5px',
    },
    input: {
        width: '250px',
        padding: '10px',
        marginBottom: '15px',
        borderRadius: '5px',
        border: '1px solid #ddd',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#FFFFFF',
    },
};

export default PasswordRecovery;
