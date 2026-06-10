
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { AppLayout } from "./shared/layout/AppLayout";





export function App() {

  return (
      <AppLayout>
        <Home />
        <About />
      </AppLayout>
  )
}
