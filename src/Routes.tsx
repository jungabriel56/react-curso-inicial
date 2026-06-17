import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import { Login } from "./pages/public/Login";
import { About } from "./pages/private/About";
import { Home } from './pages/private/Home'
import { AppLayout } from "./shared/layout/AppLayout";
import { TodoDetail } from "./pages/private/todos/TodoDetail";
import { Todo } from "./pages/private/todos/Todo";
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

              <Route path="/todos" element={<Todo />} />
              <Route path="/todos/detalhe/:id" element={<TodoDetail />} />

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