import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Admin from "./components/Admin";
import { useMainStore } from "./store";
import { QueryClient, QueryClientProvider } from "react-query";
import NotFound from "./pages/NotFound";
import AuthLayout from "./components/AuthLayout";
import { RoutePath } from "./constants";
import TwoFactorAuth from "./components/TwoFactorComponents";
import TwoFactorPage from "./pages/TwoFactorAuth";

const queryClient = new QueryClient();

function App() {
  const user = useMainStore((state) => state.user);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path={RoutePath.HOME} element={<Home />} />
            <Route path={RoutePath.LOGIN} element={<Login />} />
            <Route path={RoutePath.REGISTER} element={<Signup />} />

            <Route path={RoutePath.TWO_FACTOR} element={<TwoFactorPage />} />
            <Route element={<AuthLayout />}>
              <Route path={RoutePath.DASHBOARD} element={<Dashboard />}>
                <Route path={RoutePath.DASHBOARD} element={<Admin />}></Route>
              </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
