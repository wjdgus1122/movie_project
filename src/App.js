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
import { MvPlay } from "./pages/movie/MvPlay";
import { Globalstyle } from "./styles/Globalstyle";
import { MvPopular } from "./pages/movie/MvPopular";
import { MvRate } from "./pages/movie/MvRate";
import { MvCome } from "./pages/movie/MvCome";
import { TvPlay } from "./pages/tv/TvPlay";
import { TvPopular } from "./pages/tv/TvPopular";
import { TvRate } from "./pages/tv/TvRate";
import { TvAirToday } from "./pages/tv/TvAirToday";
import { LoginSucces } from "./pages/login/LoginSucces";
import { Search } from "./pages/search/Search";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Globalstyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/mvplay" element={<MvPlay />} />
          <Route path="/mvpopu" element={<MvPopular />} />
          <Route path="/mvrate" element={<MvRate />} />
          <Route path="/mvcome" element={<MvCome />} />
          <Route path="/tv" element={<TvProgram />} />
          <Route path="/tvplay" element={<TvPlay />} />
          <Route path="/tvpopu" element={<TvPopular />} />
          <Route path="/tvrate" element={<TvRate />} />
          <Route path="/tvair" element={<TvAirToday />} />
          <Route path="/detail1/:id" element={<Detail1 />} />
          <Route path="/detail2/:id" element={<Detail2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginsucces" element={<LoginSucces />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
