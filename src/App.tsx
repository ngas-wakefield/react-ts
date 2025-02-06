import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./pages/Login";
import Notes from "./pages/Notes";
import { NotesProvider } from "./providers/NotesContext";

const App = () => {
  return (
    <NotesProvider>
      <Router>
        <Header />
        <main style={{ paddingTop: "64px" }}> {/* Adjust based on header height */}
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </main>
      </Router>
    </NotesProvider>
  );
};

export default App;
