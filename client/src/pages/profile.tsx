import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfileSection from "@/components/ProfileSection";
import { Button } from "@/components/ui/button";

export default function Profile() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-6 gap-2" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-black mb-8">
          <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
            My
          </span>{" "}
          Profile
        </h1>

        <ProfileSection />
      </main>
      <Footer />
    </div>
  );
}
