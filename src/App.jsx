import MainLayout from "./components/layout/MainLayout";
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App(){
  return(
    <ThemeProvider>
       <Toaster 
         position="top-center" 
         toastOptions={{
           style: {
             borderRadius: '10px',
             background: '#333',
             color: '#fff',
           },
         }}
       />
       <MainLayout/>
    </ThemeProvider>
  );
}