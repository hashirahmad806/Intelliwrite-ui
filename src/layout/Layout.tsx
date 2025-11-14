import { ThemeProvider } from "@/components/theme-provider";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar"; // optional
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavBar />   {/* optional navbar */}

      <main>
        <Outlet /> {/* All pages render here */}
      </main>

      <Footer />  {/* Footer always visible */}
    </ThemeProvider>
  );
}
