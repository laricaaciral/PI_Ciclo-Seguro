import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        } else {
            navigate(-1);
        }
    };

    return (
        <div className="signup-container" style={styles.container}>
            <button style={styles.backButton} onClick={handleBack}>{"<"}</button>
            <h2 style={styles.title}>Cadastro</h2>
            {step === 1 && (
                <form style={styles.form}>
                    <label style={styles.label}>Nome Completo</label>
                    <input type="text" style={styles.input} />
                    <label style={styles.label}>CPF</label>
                    <input type="text" style={styles.input} />
                    <label style={styles.label}>Email</label>
                    <input type="email" style={styles.input} />
                    <label style={styles.label}>Data de Nascimento</label>
                    <input type="date" style={styles.input} />
                    <label style={styles.label}>Sexo</label>
                    <div style={styles.radioContainer}>
                        <label style={styles.radioLabel}>
                            <input type="radio" name="sexo" value="Feminino" style={styles.radio} /> Feminino
                        </label>
                        <label style={styles.radioLabel}>
                            <input type="radio" name="sexo" value="Masculino" style={styles.radio} /> Masculino
                        </label>
                    </div>
                    <label style={styles.label}>Status de relacionamento</label>
                    <input type="text" style={styles.input} />
                    <label style={styles.label}>Número de telefone</label>
                    <input type="text" style={styles.input} />
                    <button type="button" style={styles.button} onClick={handleNext}>Próxima</button>
                </form>
            )}
            {step === 2 && (
                <form style={styles.form}>
                    <label style={styles.label}>CEP</label>
                    <input type="text" style={styles.input} />
                    <label style={styles.label}>Endereço</label>
                    <input type="text" style={styles.input} />
                    <label style={styles.label}>Número</label>
                    <input type="text" style={styles.input} />
                    <label style={styles.label}>Complemento</label>
                    <input type="text" style={styles.input} />
                    <label style={styles.label}>Bairro</label>
                    <input type="text" style={styles.input} />
                    <label style={styles.label}>Cidade</label>
                    <input type="text" style={styles.input} />
                    <label style={styles.label}>Estado</label>
                    <input type="text" style={styles.input} />
                    <label style={styles.label}>País</label>
                    <input type="text" style={styles.input} />
                    <button type="submit" style={styles.button}>Cadastrar</button>
                </form>
            )}
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
        backgroundColor: '#F8BBD0',
        padding: '50px',
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
    radioContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '15px',
    },
    radioLabel: {
        marginRight: '20px',
    },
    radio: {
        marginRight: '5px',
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

export default Register;
