import "./style.css"
import Header from "./pages/Header"
import HomepageBody from "./pages/HomepageBody";
import SearchResult from './pages/searchResults';
import Footer from "./pages/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CommonQuestions from "./pages/CommonQuestions";
import Components from "./pages/Components";
import ProductFamily from "./pages/ProductFamily";
import Article from "./pages/ArticlePage"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  
  return (

    <BrowserRouter>

      <div>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous" />
      </div>

      <Header />

      <div className="pageContainer">
        <Routes>
          <Route path="/" element={<HomepageBody />}> </Route>
          <Route path="/search" element={<SearchResult />}> </Route>
          <Route path="/Components" element={<Components />}> </Route>
          <Route path="/ProductFamily" element={<ProductFamily />}> </Route>
          <Route path="/ArticlePage" element={<Article />}> </Route>
          <Route path="/CommonQuestions" element={<CommonQuestions />}> </Route>
        </Routes>
      </div>
      <Footer />

    </BrowserRouter>
  );

}

export default App