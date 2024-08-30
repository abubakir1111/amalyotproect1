import { Route, Routes } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './components/page2/page2header/page2header';
// import Page from './components/rec/page';

function App() {
    return (
        <>
            <div className='home-components'>
                <Routes>
                    <Route path='/' element={<Page1 />} />
                    <Route path='/page' element={<Page2 />} />
                </Routes>
            </div>
            {/* <Page /> */}
        </>
    );
}

export default App;
