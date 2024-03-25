import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import './CSS/App.css'
import AboutMe from './components/AboutMe';
import Background from './components/Background'
import Landing from './components/Landing';
import Menu from './components/Menu'
import Projects from './components/Projects';
import Contact from './components/Contact';

const pageVariants = {
  initial: {
    opacity: 0,
    x: "100vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-100vw",
  }
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.4,
};

const Page = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Page><Landing /></Page>} />
        <Route path="/AboutMe" element={<Page><AboutMe /></Page>} />
        <Route path="/Projects" element={<Page><Projects /></Page>} />
        <Route path="/Contact" element={<Page><Contact /></Page>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <Menu/>
      <Background/>
      <AppRoutes />
    </Router>
  );
};

export default App;

