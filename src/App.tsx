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

const queryClient = new QueryClient();

function App() {
  const user = useMainStore((state) => state.user);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />

            <Route element={<AuthLayout />}>
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="admin" element={<Admin />}></Route>
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
