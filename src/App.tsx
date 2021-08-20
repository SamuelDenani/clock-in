import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

import SplashScreen from "./pages/SplashScreen";

import GlobalStyle from "./styles/global";
import Routes from "./routes";

import { AuthContextProvider } from "./contexts/AuthContext";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <GlobalStyle />
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Suspense>
  );
}

export default App;
