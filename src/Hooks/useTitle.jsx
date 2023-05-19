import { useEffect } from "react"

const useTitle=(title)=>{
    useEffect(()=>{
        document.title=`Toy Man ${title}`
    },[title])
};

export default useTitle