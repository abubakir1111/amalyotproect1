import { Route, Routes } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './components/page2/page2header/page2header';
import Page3 from './components/page3/jsx/page3';
import Page4 from './components/page4/jsx/page4';
import Page from './components/rec/page';
function App() {
    return (
        <>
            <div className='home-components'>
                <Routes>
                    <Route path='/' element={<Page1 />} />
                    <Route path='/Окомпании' element={<Page2 />} />
                    <Route path='/Акции' element={<Page3 />} />
                    <Route path='/КарточкаЖК' element={<Page4 />} />
                </Routes>
            </div>
            <Page />
        </>
    );
}
export default App;