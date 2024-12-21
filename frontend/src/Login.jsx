import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

/*function Signup() {
    const [email, setEmail] = useState(""); // Initialize state variables
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:27017/login', { email, password })
            .then((result) => {
                console.log("Result from server:", result);
                if (result.data === "Success") {
                    navigate('/home');
                } else {
                    console.log("Login failed:", result.data);
                }
            })
            .catch(err => console.error("Error during login:", err));
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2 className="text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Submit</button>
                </form>
                <p>Do not have an account?</p>
                <Link to="/register" className="btn btn-default border w-100 bg-white rounded-0 text-decoration-none">
                    Register
                </Link>
            </div>
        </div>
    );
}*/
function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Email and password are required.");
            return;
        }
        axios.post('http://localhost:27017/login', { email, password }) // Ensure the correct port
            .then((result) => {
                console.log("Result from server:", result);
                if (result.data === "Success") {
                    navigate('/home');
                } else {
                    setError("Login failed: " + result.data);
                }
            })
            .catch(err => {
                console.error("Error during login:", err);
                setError("An error occurred during login.");
            });
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2 className="text-center">Login</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Submit</button>
                </form>
                <p>Do not have an account?</p>
                <Link to="/register" className="btn btn-default border w-100 bg-white rounded-0 text-decoration-none">
                    Register
                </Link>
            </div>
        </div>
    );
}
export default Signup;
