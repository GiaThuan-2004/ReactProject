
import Header from "./component/layout/header"
import Footer from "./component/layout/footer"
import { Outlet } from "react-router-dom"
import { AuthContext } from "./component/context/auth.context"
import { useContext, useEffect, useState } from "react"
import { getAccountApi } from "./service/api.service"
import { Spin } from "antd"

const App = () => {

  const { setUser } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(true)

  const delay = (time) => {
    return new Promise((res, rej) => {
      setInterval(() => res(), time)
    })
  }
  useEffect(() => {
    getUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getUser = async () => {
    const response = await getAccountApi()
    if (response.data) {
      await delay(3000)
      setUser(response.data.user)
    }
    setIsLoading(false)
  }

  return (
    <>
      {isLoading === true ?
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Spin />
        </div>
        :
        <>
          <Header />
          <Outlet />
          {/* <Footer /> */}
        </>
      }</>
  )
}

export default App
