import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    //wrap app with BrowserRouter so that all components within can use links for navigating between pages
    <BrowserRouter>
      <main>
        <div>Find me in src/app.jsx!!</div>;


      </main>

    </BrowserRouter>
  )
};
