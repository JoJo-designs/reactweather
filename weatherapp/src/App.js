import { Header } from './components/header';
import { DBConfig } from './components/DBConfig';
import { initDB } from 'react-indexed-db';

initDB(DBConfig);

export default function App() {
  return (
    <div>
      <Header />
    </div>
  );
}