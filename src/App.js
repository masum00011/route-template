import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import About from './pages/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
)

function App() {
  return (<RouterProvider router={router} />);
}
export default App;
