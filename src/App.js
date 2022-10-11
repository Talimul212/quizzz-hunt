import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import './layOuts/Main'
import Main from './layOuts/Main';
import Blog from './Components/Blog/Blog';
import Statistics from './Components/Statistics/Statistics';
import Quiz from './Components/Quiz/Quiz';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () =>
            fetch('https://openapi.programming-hero.com/api/quiz')
          ,
          element: <Home></Home>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },

        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/home/quiz/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Quiz></Quiz>
        }
      ],

    },
    { path: '*', element: <div><center><h1>This router not found 404!!!.</h1></center></div> }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
