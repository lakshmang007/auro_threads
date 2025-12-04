import AdminDashboard from "../AdminDashboard";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function AdminDashboardExample() {
  return (
    <ThemeProvider>
      <AdminDashboard />
    </ThemeProvider>
  );
}
