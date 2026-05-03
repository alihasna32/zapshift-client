import React from 'react'
import { UseAuth } from '../Hooks/UseAuth';
import useRole from '../Hooks/useRole';
import Forbidden from '../Components/Forbidden/Forbidden';

const RidersRoute = ({ children }) => {
    const {loading, user} = UseAuth();
    const {role, roleLoading} = useRole();
    
    if(loading || !user || roleLoading){
        return <div>
            <span className='loading loading-infinity loading-xl'></span>
        </div>
    }

    if(role !== "rider"){
        return <Forbidden></Forbidden>
    }

  return children;
}

export default RidersRoute