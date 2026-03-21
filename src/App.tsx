import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import InvisibleGrills from "./pages/InvisibleGrills";
import PigeonNets from "./pages/PigeonNets";
import SafetyNets from "./pages/SafetyNets";
import CricketNets from "./pages/CricketNets";
import IndustrialNets from "./pages/IndustrialNets";
import InvisibleGrillsHyderabad from "./pages/InvisibleGrillsHyderabad";
import PigeonNetsHyderabad from "./pages/PigeonNetsHyderabad";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/invisible-grills" element={<InvisibleGrills />} />
            <Route path="/pigeon-nets" element={<PigeonNets />} />
            <Route path="/safety-nets" element={<SafetyNets />} />
            <Route path="/cricket-nets" element={<CricketNets />} />
            <Route path="/industrial-nets" element={<IndustrialNets />} />
            <Route path="/invisible-grills-hyderabad" element={<InvisibleGrillsHyderabad />} />
            <Route path="/pigeon-nets-hyderabad" element={<PigeonNetsHyderabad />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
