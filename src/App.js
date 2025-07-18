import { Main } from "./pages/Main";

function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/box-seam.svg" width="30" height="30" className="d-inline-block align-top" alt="Logo producto"/>
            Product Manager
        </a>
      </nav>
      <Main />
    </>

  );
}

export default App;
