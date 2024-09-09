import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useAuthStorage } from "./storage/authenticatedUser";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import WatchPage from "./pages/WatchPage";
import SearchPage from "./pages/SearchPage";
import HistoryPage from "./pages/HistoryPage";
import NotFound from "./pages/NotFound";


function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStorage();
  console.log("Authenticated user: ", user);

  useEffect(() => {
    authCheck();
  }, [authCheck]);

  if(isCheckingAuth){
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center bg-black h-full">
          <Loader className="animate-spin text-blue-700 size-10" />
        </div>
      </div>
    )
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to={"/"} />} />
        <Route path="/signup" element={!user ? <SignUp /> : <Navigate to={"/"} />} />
        <Route path="/watch/:id" element={user ? <WatchPage /> : <Navigate to={"/login"} />} />
        <Route path="/search" element={user ? <SearchPage /> : <Navigate to={"/login"} />} />
        <Route path="/history" element={user ? <HistoryPage /> : <Navigate to={"/login"} />} />
        <Route path="/*" element={<NotFound />} />

      </Routes>
      <Footer />

      <Toaster />
    </>
  );
}

export default App;
