import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

export default function Private() {
    const { user, getAccessTokenSilently, } = useAuth0()

    return (
        <div>
            <h1>Private</h1>
            <p>{user.email}</p>
            <p>{user.name}</p>
        </div>
    )
}
