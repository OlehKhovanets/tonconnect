import {TonConnectButton, useTonConnectUI} from '@tonconnect/ui-react';

export const Header = () => {
    const [tonConnectUI, setOptions] = useTonConnectUI();
    return (
        <header>
            <span>My App with React UI</span>
            <button onClick={() => tonConnectUI.openModal()}>
                Connect Wallet
            </button>
            {/*<TonConnectButton />*/}
        </header>
    );
};