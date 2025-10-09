import { useContext } from "react";
import { AuthContext } from "../component/context/auth.context";
import { Button, Result } from 'antd';
import { Link } from "react-router-dom";


const PrivateRouter = ({ children }) => {
    const { user } = useContext(AuthContext)
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
            extra={<Button type="primary"><Link to="/login">Go to login</Link></Button>}
        />
    );
}

export { PrivateRouter }