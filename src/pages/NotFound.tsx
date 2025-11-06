import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pyra-bg">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-24 h-24 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-8">
          <div className="w-12 h-12 bg-white/20 clip-triangle" />
        </div>
        
        <h1 className="font-heading text-6xl font-bold text-gradient mb-4">404</h1>
        <h2 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
          Page Not Found
        </h2>
        <p className="text-pyra-muted mb-8 leading-relaxed">
          The page you're looking for doesn't exist. It might have been moved, 
          deleted, or you entered the wrong URL.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => window.history.back()}
            variant="outline"
            className="border-white/20 text-pyra-ink hover:bg-white/10"
          >
            <ArrowLeft className="mr-2" size={16} />
            Go Back
          </Button>
          
          <Button 
            className="bg-accent-gradient btn-sheen font-medium"
            asChild
          >
            <Link to="/">
              <Home className="mr-2" size={16} />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
