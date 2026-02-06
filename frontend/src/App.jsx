import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  // Provider ini yang akan menjalankan semua aturan di file routes/index.jsx
  return <RouterProvider router={router} />;
}

export default App;
