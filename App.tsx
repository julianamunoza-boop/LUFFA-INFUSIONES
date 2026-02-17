
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Concierge } from './components/Concierge';
import Home from './pages/Home';
import Infusions from './pages/Infusions';
import Wellness from './pages/Wellness';
import Impact from './pages/Impact';
import B2B from './pages/B2B';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('EN');

  return (
    <Router>
      <Layout lang={lang} setLang={setLang}>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/infusions" element={<Infusions lang={lang} />} />
          <Route path="/wellness" element={<Wellness lang={lang} />} />
          <Route path="/impact" element={<Impact lang={lang} />} />
          <Route path="/b2b" element={<B2B lang={lang} />} />
        </Routes>
        <Concierge lang={lang} />
      </Layout>
    </Router>
  );
};

export default App;
