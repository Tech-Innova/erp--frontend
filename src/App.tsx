import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Admin from "./components/Admin";
import { useMainStore } from "./store";
import { QueryClient, QueryClientProvider } from "react-query";
import NotFound from "./pages/NotFound";
import PermissionDenied from "./pages/PermissionDenied";

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
            {user ? (
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="admin" element={<Admin />}></Route>
              </Route>
            ) : (
              <Route path="/dashboard" element={<Login />}>
                <Route path="admin" element={<Login />}></Route>
              </Route>
            )}
            <Route path="/404-error" element={<NotFound />} />
            <Route path="/access-denied" element={<PermissionDenied />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
