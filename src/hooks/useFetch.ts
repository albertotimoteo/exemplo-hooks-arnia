import { useCallback, useEffect, useState } from "react"

export const useFetch = (url: string, method: "GET" | "POST", body?: any) => {
  const [result, setResult] = useState()

  const fetchData = useCallback(async () => {
    const data = await fetch(url, { method, body })
    const dataJson = await data.json()
    setResult(dataJson)
  }, [body, method, url])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { result, fetchData }
}
