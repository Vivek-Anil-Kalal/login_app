import axios from "axios"
import { useEffect, useState } from "react"

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN

// using the 'use' keyword before function name will tend react to understand it as React Hook
/** Custom Hook */
export default function useFetch(query) {
    const [getData, setData] = useState({
        isLoading: false,
        apiData: undefined,
        status: null,
        serverError: null
    })

    useEffect(() => {
        if (!query) return;

        const fetchData = async () => {
            try {
                setData(prev => ({ ...prev, isLoading: true }))

                const { data, status } = await axios.get(`/api/${query}`)

                if (status === 201) {
                    setData(prev => ({ ...prev, isLoading: false, apiData: data, status: status }))
                }

                setData(prev => ({ ...prev, isLoading: false }))

            } catch (error) {
                // spread operator se baki sari values same rakhi bas do change ki
                setData(prev => ({ ...prev, isLoading: false, serverError: error }))
            }
        }

        fetchData();
    }, [query])

    return [getData, setData]
}