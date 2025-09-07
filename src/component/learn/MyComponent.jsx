// JSX: 1 parent
//fragment <> </>
// {} giup co the viet js trong khoi html

import "./style.css";

const MyComponent = () => {
    const age = 21;
    const obj = { name: 'AAA', email: 'AAA@gmail.com' };
    return (
        // fragment giup phan tu boc ngoai khong render tag html ben ngoai
        <>
            <div>From: Le Gia Thuan</div>
            <div>Age: {JSON.stringify(obj)}</div>
            <div className="child">CSS Here</div>
        </>
    );
}

export default MyComponent;