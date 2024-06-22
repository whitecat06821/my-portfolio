import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import { Offline } from "react-detect-offline";

function App() {
  return (
    <div className="background-project p-10 lg:px-24 text-white animate-faidIn dark:text-zinc-800 dark:bg-white">
      <div className="fixed left-30 bottom-4">
        <Offline>
          <div className="py-2 px-4 bg-gray-400 w-fit rounded">
            Only shown offline (surprise!)
          </div>
        </Offline>
      </div>

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
