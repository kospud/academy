import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/AppRouter';
import PageScrollbarContextProvider from './Components/Providers/PageScrollbarContextProvider';
import { deviceDetect } from 'react-device-detect';
import { useEffect } from 'react';
import SmoothScrollContainer from './Components/SmoothScrollContainer';



function App() {

  return (
    <PageScrollbarContextProvider>
      <SmoothScrollContainer>
        <div className="App" >

          <BrowserRouter basename='academy'>
            <AppRouter />
          </BrowserRouter>

        </div>
      </SmoothScrollContainer>
    </PageScrollbarContextProvider>
  );
}

export default App;
