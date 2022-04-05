import useFetch from "./hooks/useFetch";
import Movies from "./components/Movies";

function App() {
  const {data, isLoading} = useFetch();
  
  return (
    <>
      <Movies title="Netflix originals" movies={data.originals} />
    </>
  );
}

export default App;
