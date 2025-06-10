import { useState } from "react";
import { Toaster } from "react-hot-toast";
import OptimizedRoutes from "./components/ProtectedRoutes/OptimizedRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontSize: "1 rem",
          },
        }}
      ></Toaster>
      <OptimizedRoutes />
    </>
  );
}

export default App;
