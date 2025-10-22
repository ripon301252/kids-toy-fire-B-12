import axios from "axios"
import { useEffect, useState } from "react"


export const useToy = () => {
    const [toys, setApps] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        axios('/toy.json')
            .then(api => setApps(api.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    return{toys, loading, error}
}