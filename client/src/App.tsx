import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

// Service Pages — 6 servicios principales
import InstalacionResidencial from "./pages/services/InstalacionResidencial";
import InstalacionIndustrial from "./pages/services/InstalacionIndustrial";
import Baterias from "./pages/services/Baterias";
import Mantenimiento from "./pages/services/Mantenimiento";
import Subvenciones from "./pages/services/Subvenciones";
import AutoconsumoColectivo from "./pages/services/AutoconsumoColectivo";

// Location Pages — Murcia capital (10 barrios)
import LaFlota from "./pages/locations/LaFlota";
import ElCarmen from "./pages/locations/ElCarmen";
import Espinardo from "./pages/locations/Espinardo";
import Churra from "./pages/locations/Churra";
import LaPaz from "./pages/locations/LaPaz";
import ElRanero from "./pages/locations/ElRanero";
import Vistabella from "./pages/locations/Vistabella";
import JuanCarlosI from "./pages/locations/JuanCarlosI";
import LaAlberca from "./pages/locations/LaAlberca";
import ElPalmar from "./pages/locations/ElPalmar";

// Location Pages — 9 municipios clave
import Cartagena from "./pages/locations/Cartagena";
import Lorca from "./pages/locations/Lorca";
import MolinaDeSegura from "./pages/locations/MolinaDeSegura";
import Alcantarilla from "./pages/locations/Alcantarilla";
import TorrePacheco from "./pages/locations/TorrePacheco";
import SanJavier from "./pages/locations/SanJavier";
import Yecla from "./pages/locations/Yecla";
import Jumilla from "./pages/locations/Jumilla";
import Cieza from "./pages/locations/Cieza";

function Router() {
  return (
    <Switch>
      {/* Home */}
      <Route path="/" component={Home} />

      {/* Service Pages */}
      <Route path="/servicios/instalacion-solar-residencial" component={InstalacionResidencial} />
      <Route path="/servicios/instalacion-solar-industrial" component={InstalacionIndustrial} />
      <Route path="/servicios/baterias-almacenamiento-solar" component={Baterias} />
      <Route path="/servicios/mantenimiento-placas-solares" component={Mantenimiento} />
      <Route path="/servicios/subvenciones-placas-solares" component={Subvenciones} />
      <Route path="/servicios/autoconsumo-colectivo" component={AutoconsumoColectivo} />

      {/* Location Pages — Murcia capital */}
      <Route path="/murcia/instalacion-placas-solares-la-flota" component={LaFlota} />
      <Route path="/murcia/instalacion-placas-solares-el-carmen" component={ElCarmen} />
      <Route path="/murcia/instalacion-placas-solares-espinardo" component={Espinardo} />
      <Route path="/murcia/instalacion-placas-solares-churra" component={Churra} />
      <Route path="/murcia/instalacion-placas-solares-la-paz" component={LaPaz} />
      <Route path="/murcia/instalacion-placas-solares-el-ranero" component={ElRanero} />
      <Route path="/murcia/instalacion-placas-solares-vistabella" component={Vistabella} />
      <Route path="/murcia/instalacion-placas-solares-juan-carlos-i" component={JuanCarlosI} />
      <Route path="/murcia/instalacion-placas-solares-la-alberca" component={LaAlberca} />
      <Route path="/murcia/instalacion-placas-solares-el-palmar" component={ElPalmar} />

      {/* Location Pages — 9 municipios clave */}
      <Route path="/murcia/instalacion-placas-solares-cartagena" component={Cartagena} />
      <Route path="/murcia/instalacion-placas-solares-lorca" component={Lorca} />
      <Route path="/murcia/instalacion-placas-solares-molina-de-segura" component={MolinaDeSegura} />
      <Route path="/murcia/instalacion-placas-solares-alcantarilla" component={Alcantarilla} />
      <Route path="/murcia/instalacion-placas-solares-torre-pacheco" component={TorrePacheco} />
      <Route path="/murcia/instalacion-placas-solares-san-javier" component={SanJavier} />
      <Route path="/murcia/instalacion-placas-solares-yecla" component={Yecla} />
      <Route path="/murcia/instalacion-placas-solares-jumilla" component={Jumilla} />
      <Route path="/murcia/instalacion-placas-solares-cieza" component={Cieza} />

      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
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
