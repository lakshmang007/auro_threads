import { useLocation } from "wouter";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminDashboard from "@/components/AdminDashboard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";

export default function Admin() {
  const [, setLocation] = useLocation();
  const { isAuthenticated, isAdmin } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-16">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 max-w-md mx-auto text-center py-12">
            <CardContent>
              <ShieldAlert className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
              <h2 className="text-xl font-bold mb-2">Authentication Required</h2>
              <p className="text-muted-foreground mb-6">
                Please log in to access the admin dashboard
              </p>
              <Button
                onClick={() => setLocation("/login")}
                className="bg-gradient-to-r from-neon-pink to-neon-purple"
                data-testid="button-login"
              >
                Login
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-16">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 max-w-md mx-auto text-center py-12">
            <CardContent>
              <ShieldAlert className="w-16 h-16 mx-auto text-destructive mb-4" />
              <h2 className="text-xl font-bold mb-2">Access Denied</h2>
              <p className="text-muted-foreground mb-6">
                You don't have permission to access this page
              </p>
              <Link href="/">
                <Button data-testid="button-go-home">Go Home</Button>
              </Link>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-6 gap-2" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
            Back to Store
          </Button>
        </Link>

        <AdminDashboard />
      </main>
      <Footer />
    </div>
  );
}
