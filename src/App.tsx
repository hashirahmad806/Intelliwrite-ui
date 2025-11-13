
import './App.css'
import {SpinnerButton} from "./components/Spinner"
import {CardDemo} from './components/Card';

import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "./components/mode-toggle";

 import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

      
      <ModeToggle />
       <Home />
      < SpinnerButton />
      
      <CardDemo/>
    
    </ThemeProvider>
  )
}

export default App