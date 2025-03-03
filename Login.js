import React, { useState } from "react";

function Login() {
    const [phone, setPhone] = useState("");
    
    const handleLogin = async () => {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phone }),
        });
        const data = await response.json();
        console.log("User Logged In:", data);
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="Enter phone" onChange={(e) => setPhone(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;