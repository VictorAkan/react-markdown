import { useState,useEffect } from "react";
import paginate from "./utils";
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

export const useFetch = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([] as any[])

    const getProducts = async () => {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data);
        setData(paginate(data))
        console.log(paginate(data));
        
        setLoading(false)
    }
    useEffect(() => {
        getProducts()
    }, [])

    return { loading, data }
}