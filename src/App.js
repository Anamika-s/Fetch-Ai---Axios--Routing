import logo from './logo.svg';
import './App.css';
import { FetchApiDemo } from './components/FetchApiDemo';
import { PostApiDemo } from './components/PostApiDemo';
import { AxiosFetchApiDemo } from './components/AxiosFetchApiDemo';
import { AxiosPostApiDemo } from './components/AxiosPostApiDemo';
import { AxiosPostApiDemo_AsyncAwait } from './components/AxiosPostApiDemo_AsyncAwait';
import { App1 } from './App1';

function App() {
  return (
    <div className="App">
      <App1/>
         {/* {/* <FetchApiDemo/>
         <PostApiDemo/> */}
        {/* <AxiosFetchApiDemo/>
        <AxiosPostApiDemo/>
        <AxiosPostApiDemo_AsyncAwait/>   */}
    </div>
  );
}

export default App;
