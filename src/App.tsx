import './scss/style.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';


import { Home } from './pages/Home';
import { OrphanagesMap } from './pages/OrphanagesMap';
import { CreateOrphanage } from './pages/CreateOrphanage';
import { ViewOrphanage } from './pages/ViewOrphanage';

function App() {
  return (
    <HashRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateOrphanage />} />
      <Route path="/orphanages" element={<OrphanagesMap />} />
      <Route path="/orphanages/:id" element={<ViewOrphanage />} />
     </Routes>
    </HashRouter>
  );
}

export default App;
