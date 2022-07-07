import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Detail1 } from "./pages/detail/Detail1";
import { Detail2 } from "./pages/detail/Detail2";
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
          <Route path="/detail1/:id" element={<Detail1 />} />
          <Route path="/detail2/:id" element={<Detail2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
