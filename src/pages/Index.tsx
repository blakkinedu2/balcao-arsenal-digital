import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
        <p className="text-xl text-muted-foreground mb-8">Start building your amazing project here!</p>
        
        <div className="space-y-4">
          <Button asChild variant="cta" size="lg">
            <Link to="/raio-x-do-balcao">
              🔥 Ver Landing Page: O Raio-X do Balcão™
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
