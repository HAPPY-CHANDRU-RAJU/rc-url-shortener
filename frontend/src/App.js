//import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashRouter } from "react-router-dom";

import Navbar from "./components/navbar.component"
import defaultList from "./components/default-list.component";
import insertList from "./components/insert-list.component";
import showList from "./components/show-list.component";
import readList from "./components/read-list.component";
import updateList from "./components/update-list.component";
import deleteList from "./components/delete-list.component";
import about from "./components/about.component";
import updateSuccess from "./components/update.component";
import RedirectList from "./components/redirect.component";

function App() {
  return (
    <HashRouter>
        <Navbar />
        <Route path="/" exact component={defaultList} />
        <Route path="/add" component={insertList} />
        <Route path="/show" exact component={showList} />
        <Route path="/read/:id" component={readList} />
        <Route path="/update/:id" component={updateList} />
        <Route path="/delete/:id" component={deleteList} />
        <Route path="/about-us" component={about} />
        <Route path="/update-success" component={updateSuccess} />
        <Route path="/s/:id" exact component={RedirectList} />
    </HashRouter>
     
  );
}

export default App;
