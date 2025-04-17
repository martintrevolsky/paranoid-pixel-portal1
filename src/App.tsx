
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Force dark mode for the paranoid theme
  useEffect(() => {
    // Set dark mode
    document.documentElement.classList.add("dark");
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Add class for cursor
    document.documentElement.classList.add("custom-cursor");
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
      document.documentElement.classList.remove("custom-cursor");
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* Loading screen */}
        <LoadingScreen isLoading={isLoading} />
        {/* Custom animated cursor */}
        <CustomCursor />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Placeholder routes for future pages */}
            <Route path="/pricing" element={<Index />} />
            <Route path="/features" element={<Index />} />
            <Route path="/faq" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
