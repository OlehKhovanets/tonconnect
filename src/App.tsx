import './App.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import {Header} from "./Header";
import {Address} from "./Address";

function App() {
    return (
        <TonConnectUIProvider manifestUrl="https://olehkhovanets.github.io/tonconnect/dist/tonconnect-manifest.json">
            <Address/>
            <Header/>
        </TonConnectUIProvider>
    );
}

export default App
