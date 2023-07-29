import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class ToastService{
    public success(message?:string){
        toast.success(`${message || 'Sucesso!'}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    public error(message?:string){
        toast.error(`${message || 'Erro!'}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
}

export default new ToastService();