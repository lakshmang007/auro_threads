import AuthForm from "../AuthForm";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";

export default function AuthFormExample() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AuthForm mode="login" />
      </AuthProvider>
    </ThemeProvider>
  );
}
