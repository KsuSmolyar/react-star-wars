import Header from "../../components/Header";
import routesConfig from "../../routes/routesConfig";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header/>
          <Routes>
              {routesConfig.map((route, index) => {
                return (
                  <Route key={index} path={route.path} Component={route.component}/>
                )
              })}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
