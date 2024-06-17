import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuth } from "../utils/AuthContext";

const Login: React.FC = () => {
    const { login } = useAuth();
    const [cpfOrEmail, setCpfOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!cpfOrEmail || !password) {
            setError("Please fill in both fields");
            return;
        }

        try {
            await login();

            navigate("/");
        } catch (error) {
            setError("Failed to log in. Please try again.");
        }
    };

    return (
        <div className="login-container" style={styles.container}>
            <button style={styles.backButton} onClick={() => window.history.back()}>
                {"<"}
            </button>
            <h2 style={styles.title}>Login</h2>
            <form style={styles.form} onSubmit={handleSubmit}>
                <label style={styles.label}>CPF / Email</label>
                <input
                    type="text"
                    style={styles.input}
                    value={cpfOrEmail}
                    onChange={(e) => setCpfOrEmail(e.target.value)}
                />
                <label style={styles.label}>Senha</label>
                <input
                    type="password"
                    style={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p style={styles.error}>{error}</p>}
                <Link to="/password-recovery" style={styles.recoverLink}>
                    Esqueceu sua senha? Recuperar
                </Link>
                <button type="submit" style={styles.button}>
                    Entrar
                </button>
            </form>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        backgroundColor: "#F8BBD0",
    },
    backButton: {
        alignSelf: "flex-start",
        fontSize: "24px",
        background: "none",
        border: "none",
        cursor: "pointer",
        marginBottom: "10px",
    },
    title: {
        fontSize: "24px",
        color: "#000000",
        marginBottom: "20px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    label: {
        fontSize: "16px",
        color: "#000000",
        marginBottom: "5px",
    },
    input: {
        width: "250px",
        padding: "10px",
        marginBottom: "15px",
        borderRadius: "5px",
        border: "1px solid #ddd",
    },
    recoverLink: {
        fontSize: "14px",
        color: "#0000EE",
        marginBottom: "20px",
        textDecoration: "none",
    },
    button: {
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        backgroundColor: "#FFFFFF",
    },
    error: {
        color: "red",
        marginBottom: "15px",
    },
};

export default Login;
