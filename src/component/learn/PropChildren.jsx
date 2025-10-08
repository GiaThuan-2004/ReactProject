
const ParentComponent = (props) => {
    return (
        <div style={{ fontSize: "50px" }}>
            Parent
            {/* Cach viet nay tuong tu <ChildrenComponent /> nhung trong RenderComponent phai truyen 
                ChildrenComponent
            */}
            {props.children}
        </div>
    );
}

const ChildrenComponent = (props) => {
    return (
        <div style={{ fontSize: "50px" }}>
            Children
        </div>
    );
}

const RenderComponent = (props) => {
    return (
        <ParentComponent>
            <ChildrenComponent />
        </ParentComponent>
    )
}

export { ParentComponent, ChildrenComponent, RenderComponent }