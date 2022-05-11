import { authApi } from '@/api/index';
import * as React from 'react';

export default function LoginPage() {
    const handleLoginClick = async () => {
        try {
            await authApi.login({
                "email": "duy@gmail.com",
                "password": "12345678"
            })
        } catch (error) {
            console.log(error)
        }
    };
    const handleGetProfileClick = async () => {
        try {
            await authApi.getProfile();
        } catch (error) {
            console.log(error)
        }
     };
    const handleLogoutClick = async () => {
        try {
            await authApi.logout()
        } catch (error) {
            console.log(error)
        }
     };

    return (
        <div>
            <h1>Login page</h1>
            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleGetProfileClick}>Get Profile</button>
            <button onClick={handleLogoutClick}>Logout</button>
        </div>
    );
}
