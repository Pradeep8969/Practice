import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  }
])

const App = () => {
  return (
<<<<<<< HEAD
    <RouterProvider router={router} />
=======
    <div>

      <h1>Test </h1>
      
      <h1>The test part now</h1>

    </div>
>>>>>>> 57fa7c26997bd7b0e05bc1aa9776448c3d1c2eb6
  )
}

export default App;
