import { useState } from 'react';

function Address({ address }) {
    return (
        <ul>
            <li>{address.street_address}</li>
            <li>{address.city}, {address.state} {address.zip_code}</li>
            <li>{address.country}</li>
        </ul>
    )
}

export default Address;