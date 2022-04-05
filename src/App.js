import useFetch from "./hooks/useFetch";

function App() {
  const {data, isLoading} = useFetch();
  
  return (
    <>
      <h1>
        Initial commit
      </h1>
    </>
  );
}

export default App;
