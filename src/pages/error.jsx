import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Result } from 'antd';

export default function ErrorPage() {
    const error = useRouteError();
    // console.error(error);
    return (
        <div id="error-page">
            <Result
                status={error.status || '500'}
                title='Oops'
                subTitle={error.statusText || error.message}
                extra={<Button type="primary"><Link to="/">Back To Home Page</Link></Button>}
            />

        </div>
    );
}
