import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Eye, EyeOff, Mail, Lock, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

interface AuthFormProps {
  mode: "login" | "register";
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [, setLocation] = useLocation();
  const { login, register } = useAuth();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let success = false;
      if (mode === "login") {
        success = await login(formData.email, formData.password);
        if (success) {
          toast({
            title: "Welcome back!",
            description: "You have successfully logged in.",
          });
        }
      } else {
        success = await register(formData.name, formData.email, formData.password);
        if (success) {
          toast({
            title: "Account created!",
            description: "Welcome to Aura Threads.",
          });
        }
      }

      if (success) {
        setLocation("/");
      }
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <Card className="w-full max-w-md bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-10 h-10 text-neon-pink" />
          </div>
          <CardTitle className="text-2xl font-black">
            {mode === "login" ? "Welcome Back" : "Join Aura Threads"}
          </CardTitle>
          <CardDescription>
            {mode === "login"
              ? "Sign in to access your account"
              : "Create an account to start shopping"}
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {mode === "register" && (
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-10 bg-secondary/50"
                    required
                    data-testid="input-name"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10 bg-secondary/50"
                  required
                  data-testid="input-email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-10 pr-10 bg-secondary/50"
                  required
                  minLength={6}
                  data-testid="input-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  data-testid="button-toggle-password"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {mode === "login" && (
              <div className="text-right">
                <Link
                  href="/forgot-password"
                  className="text-sm text-neon-cyan hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold py-6 rounded-full"
              disabled={isLoading}
              data-testid="button-submit"
            >
              {isLoading
                ? "Please wait..."
                : mode === "login"
                ? "SIGN IN"
                : "CREATE ACCOUNT"}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              {mode === "login" ? (
                <>
                  Don't have an account?{" "}
                  <Link href="/register" className="text-neon-pink hover:underline font-medium">
                    Sign up
                  </Link>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <Link href="/login" className="text-neon-pink hover:underline font-medium">
                    Sign in
                  </Link>
                </>
              )}
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
