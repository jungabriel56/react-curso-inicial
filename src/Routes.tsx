import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import { Login } from "./pages/public/Login";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { AppLayout } from "./shared/layout/AppLayout";
import { Detail } from "./pages/Detail";
import { useIsAuthenticated } from "./shared/contexts/AuthContext";

export const AppRoutes = () => {
      const isAuthenticated = useIsAuthenticated();

    return (
        <BrowserRouter>
        {isAuthenticated && (
          <AppLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/detalhe/:id" element={<Detail />} />

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </AppLayout>
        )}
        {!isAuthenticated && (
          <Routes>
            <Route path="*" element={<Login />} />
          </Routes>
        )}
      </BrowserRouter>
    )
}