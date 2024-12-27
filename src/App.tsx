import './App.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import {Header} from "./Header";

function App() {
    return (
        <TonConnectUIProvider manifestUrl="https://4c9b-193-19-254-242.ngrok-free.app/tonconnect-manifest.json">
            <Header/>
        </TonConnectUIProvider>
    );
}

export default App
