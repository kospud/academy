import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/AppRouter';
import PageScrollbarContextProvider from './Components/Providers/PageScrollbarContextProvider';
import { deviceDetect } from 'react-device-detect';
import { useEffect } from 'react';



function App() {

  /*useEffect(()=>{

    const resizeHandler=()=>{
      deviceDetect();

    window.addEventListener('resize', resizeHandler)

    return ()=>{
      window.removeEventListener('resize', resizeHandler)
    }
    }
  },[])*/
  return ( 
      <div className="App" >
        <PageScrollbarContextProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
        </PageScrollbarContextProvider>
      </div>
  );
}

export default App;
