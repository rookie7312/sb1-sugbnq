import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import AdLayout from './components/AdLayout';
import Home from './pages/Home';
// ... other imports remain the same

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <AdLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                {/* ... other routes remain the same */}
              </Routes>
            </AdLayout>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;