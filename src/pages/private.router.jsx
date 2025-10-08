import { useContext } from "react";
import { AuthContext } from "../component/context/auth.context";
import { Button, Result } from 'antd';


const PrivateRouter = ({ children }) => {
    const { user } = useContext(AuthContext)
    console.log(children)
    if (user && user.id) {
        return (
            <>
                {children}
            </>
        );
    }

    return (
        <Result
            status="403"
            title="Unauthorized"
            subTitle="Please login to use this feature"
            extra={<Button type="primary">Back Home</Button>}
        />
    );
}

export { PrivateRouter }