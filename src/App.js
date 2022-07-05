import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Detail } from "./pages/detail/Detail";
import { Footer } from "./pages/Footer";
import { Header } from "./pages/Header";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Movie } from "./pages/movie/Movie";
import { MyPage } from "./pages/mypage/MyPage";
import { TvProgram } from "./pages/tv/TvProgram";
import { Globalstyle } from "./styles/Globalstyle";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Globalstyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/tv" element={<TvProgram />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
