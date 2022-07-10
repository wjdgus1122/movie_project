import { PageTitle } from "../../PageTitle";

export const Movie = () => {
  const [mvplay, setMvPlay] = useState();
  const [mvpopu, setMvPopu] = useState();
  const [mvrate, setMvRate] = useState();
  const [mvcome, setMvCome] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const MovieData = async () => {
      try {
        const {
          data: { results: playingmovie },
        } = await apiData.movie_Playing();
        setMvPlay(playingmovie);

        const {
          data: { results: popumovie },
        } = await apiData.movie_Popular();
        setMvPopu(popumovie);

        const {
          data: { results: ratemovie },
        } = await apiData.movie_Rated();
        setMvRate(ratemovie);

        const {
          data: { results: upcomemovie },
        } = await apiData.movie_Upcoming();
        setMvCome(upcomemovie);
        AOS.init();
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    MovieData();
  }, []);
  return (
    <>
      <PageTitle title="Movie" />
      <Wrap>
        <Title></Title>
      </Wrap>
    </>
  );
};
