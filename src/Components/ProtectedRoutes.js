import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoutes = () => {

    const userName = useSelector(state => state.userName);
		// Aquí va la condición. Puede ser una condición de cualquier tipo. Lo que 
		// Importa es que valide si el usuario está loggeado o no
    if(userName){
        return <Outlet />
    } 
    
    else { 
        return <Navigate to='/' />// si no esta loggeado devolvemos a la ruta raiz, la cual es el componente Login
    }                     
};                       

export default ProtectedRoutes;