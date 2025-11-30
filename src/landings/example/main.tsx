import { createRoot } from 'react-dom/client';
import App from './App';
import { initFakeFbq } from '../../lib/fbq';
import '../../index.css'

initFakeFbq()

createRoot(document.getElementById('root')!).render(<App />);
