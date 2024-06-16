import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import Navbar from './components/Navbar/Navbar';
import "./styles/App.css";
import Footer from './components/Footer/Footer';


const App = () => {

    const elements = useRoutes(routes);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Suspense fallback={<div>Loading...</div>}>
            <Navbar/>
            {elements}
            <Footer hasFooterName={true}/>
        </Suspense>
        </div>
        
    );
};

export default App;