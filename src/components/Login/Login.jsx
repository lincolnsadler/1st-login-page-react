import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
useState;
import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, password);

        alert("Enviando os dados: " + username + " - " + password);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-field">
                    <input
                        type="email"
                        placeholder="E-mail"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <FaUser className="icon" />
                </div>
                <div className="input-field">
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className="icon" />
                </div>

                <div className="recall-forget">
                    <label htmlFor="">
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <a href="#">Forgot pass?</a>
                </div>
                <button>Entrar</button>

                <div className="signup-link">
                    <p>
                        Don't have an account? <a href="#">Signup</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
