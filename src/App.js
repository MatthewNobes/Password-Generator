import css from './App.module.css'
import Header from './Components/Header/Header';
import PasswordGenerator from './Components/PasswordGenerator/PasswordGenerator';

const App = () => {
  return (
    <div className={css.App}>
      <Header />
      <PasswordGenerator />
    </div>
  );
}

export default App;
