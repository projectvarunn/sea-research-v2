import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LandingPage from "./pages/LandingPage";
import SingaporePage from "./pages/SingaporePage";
import IndonesiaPage from "./pages/IndonesiaPage";
import BangladeshPage from "./pages/BangladeshPage";
import MalaysiaPage from "./pages/MalaysiaPage";
import PhilippinesPage from "./pages/PhilippinesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/singapore" element={<SingaporePage />} />
          <Route path="/indonesia" element={<IndonesiaPage />} />
          <Route path="/bangladesh" element={<BangladeshPage />} />
          <Route path="/malaysia" element={<MalaysiaPage />} />
          <Route path="/philippines" element={<PhilippinesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
