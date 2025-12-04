import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4 bg-card/50 backdrop-blur-sm border-border/50">
        <CardContent className="pt-8 pb-8 text-center">
          <Sparkles className="w-16 h-16 mx-auto text-neon-pink mb-4" />
          <h1 className="text-6xl font-black bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent mb-4">
            404
          </h1>
          <p className="text-xl font-bold mb-2">Page Not Found</p>
          <p className="text-muted-foreground mb-6">
            This page seems to have wandered into another dimension...
          </p>
          <Link href="/">
            <Button className="bg-gradient-to-r from-neon-pink to-neon-purple" data-testid="button-go-home">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
