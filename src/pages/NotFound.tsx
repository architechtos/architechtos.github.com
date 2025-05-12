
import { useLocation, Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
      <div className="text-tea-600 mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"></path>
          <path d="M5 19.5C5.5 18 6 15 6 12c0-6 4-10 10-10"></path>
          <path d="M12 22c-4 0-7-2-8.5-6"></path>
          <path d="M15.1 2.3 14 6.8l4.5-1.1"></path>
          <circle cx="12" cy="16" r="3"></circle>
          <line x1="8" y1="11" x2="16" y2="11"></line>
        </svg>
      </div>
      
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8">
        {language === 'en' 
          ? "Oops! We couldn't find the page you were looking for." 
          : "Hoppla! Wir konnten die gesuchte Seite nicht finden."}
      </p>
      
      <Button asChild className="bg-tea-600 hover:bg-tea-700">
        <Link to="/">
          <ArrowLeft size={16} className="mr-2" />
          {language === 'en' ? 'Back to Home' : 'Zurück zur Startseite'}
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
