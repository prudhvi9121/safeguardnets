import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop";
// Home page is eagerly loaded — it is the critical path for LCP
import Index from "./pages/Index";

// All other pages are lazy-loaded — only downloaded when navigated to
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const InvisibleGrills = lazy(() => import("./pages/InvisibleGrills"));
const PigeonNets = lazy(() => import("./pages/PigeonNets"));
const SafetyNets = lazy(() => import("./pages/SafetyNets"));
const CricketNets = lazy(() => import("./pages/CricketNets"));
const IndustrialNets = lazy(() => import("./pages/IndustrialNets"));
const ClothHangers = lazy(() => import("./pages/ClothHangers"));
const InvisibleGrillsHyderabad = lazy(() => import("./pages/InvisibleGrillsHyderabad"));
const PigeonNetsHyderabad = lazy(() => import("./pages/PigeonNetsHyderabad"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollToTop />
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/invisible-grills" element={<InvisibleGrills />} />
              <Route path="/pigeon-nets" element={<PigeonNets />} />
              <Route path="/safety-nets" element={<SafetyNets />} />
              <Route path="/cricket-nets" element={<CricketNets />} />
              <Route path="/industrial-nets" element={<IndustrialNets />} />
              <Route path="/cloth-hangers" element={<ClothHangers />} />
              <Route path="/invisible-grills-hyderabad" element={<InvisibleGrillsHyderabad />} />
              <Route path="/pigeon-nets-hyderabad" element={<PigeonNetsHyderabad />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

