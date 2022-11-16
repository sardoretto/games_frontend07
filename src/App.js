import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateRoute from "./pages/Create";
import DetailRoute from "./pages/Detail";
import ListRoute from "./pages/List";
import UpdateRoute from "./pages/Update";
import AuthProvider from "./utils/AuthProvider";

function App() {
  return (
    // 3 etap Providerni qaysi komponentlar ishlata olishini begilab, sferaga icha olish
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListRoute />} />
          <Route path="/games/:gameId" element={<DetailRoute />} />
          <Route path="/games/create" element={<CreateRoute />} />
          <Route path="/games/update/:gameId" element={<UpdateRoute />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
