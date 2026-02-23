import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

// Placeholder pages for now
const About = () => <div className="container py-12"><h1 className="text-4xl font-serif mb-4">Sobre Mim</h1><p>Em construção...</p></div>;
const Garden = () => <div className="container py-12"><h1 className="text-4xl font-serif mb-4">Jardim de Projetos</h1><p>Em construção...</p></div>;
const Projects = () => <div className="container py-12"><h1 className="text-4xl font-serif mb-4">Projetos</h1><p>Em construção...</p></div>;
const Contact = () => <div className="container py-12"><h1 className="text-4xl font-serif mb-4">Contato</h1><p>Em construção...</p></div>;

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/garden" component={Garden} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
