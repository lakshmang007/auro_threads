import ProfileSection from "../ProfileSection";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { WishlistProvider } from "@/contexts/WishlistContext";

export default function ProfileSectionExample() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <WishlistProvider>
          <ProfileSection />
        </WishlistProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
