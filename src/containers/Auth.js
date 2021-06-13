import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

export default function Auth() {
    const { loginWithRedirect } = useAuth0()

    const handleSignIn = () => {
        loginWithRedirect()
    }

    return (
        <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
            Auth
            <button onClick={handleSignIn} style={{ maxWidth: 120 }}>Sign in</button>
        </div>
    )
}

