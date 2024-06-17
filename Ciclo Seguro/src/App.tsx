import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import Navbar from './components/Navbar/Navbar';
import "./styles/App.css";
import Footer from './components/Footer/Footer';
import { AuthProvider } from './utils/AuthContext';

const App = () => {
    const elements = useRoutes(routes);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowY: 'hidden' }}>
            <AuthProvider>
                <Navbar />
                <Suspense fallback={<div>Loading...</div>}>
                    <div style={{ flex: 1, overflowY: 'auto' }}>
                        {elements}
                    </div>
                    <Footer hasFooterName />
                </Suspense>
            </AuthProvider>
        </div>
    );
};

export default App;
