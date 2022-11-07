import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './componants/Home';
import Add from './componants/Add';
import Update from './componants/Update';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    loader: () => fetch('http://localhost:5000/users')
  },
  {
    path: '/users/add',
    element: <Add></Add>
  },
  {
    path: '/update/:id', element: <Update></Update>,
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
