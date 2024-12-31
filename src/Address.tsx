import React, { useEffect, useState } from 'react';
import { useTonAddress } from '@tonconnect/ui-react';

export const Address = () => {
    const userFriendlyAddress = useTonAddress();
    const rawAddress = useTonAddress(false);

    const sendToBackend = async () => {
        try {
            const response = await fetch('/save-wallet-address', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userFriendlyAddress,
                    rawAddress,
                }),
            });

            const data = await response.json();
            console.log('Address saved successfully:', data);
        } catch (error) {
            console.error('Error sending address to backend:', error);
        }
    };

    useEffect(() => {
        sendToBackend();
    }, [userFriendlyAddress]); // Спостереження за rawAddress

    return (
        userFriendlyAddress && (
            <div>
                <span>User-friendly address: {userFriendlyAddress}</span>
                <span>Raw address: {rawAddress}</span>
                <button onClick={sendToBackend}>Save Address</button>
            </div>
        )
    );
};
