import useFetch from "./hooks/useFetch";
import Movies from "./components/Movies";

function App() {
  const {data, isLoading} = useFetch();
  
  return (
    <>
      <Movies title="Netflix originals" movies={data.originals} />
      <Movies title="Trending" movies={data.trending} />
      <Movies title="Now playing" movies={data.now_playing} />
      <Movies title="Popular" movies={data.popular} />
      <Movies title="Top rated" movies={data.top_rated} />
      <Movies title="Upcoming" movies={data.upcoming} />
    </>
  );
}

export default App;
