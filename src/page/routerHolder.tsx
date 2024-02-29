import {Outlet} from "oh-router-react";

const RouterHolderView = () => {
    return (
        <div className={"w-full h-full bg-white p-4 rounded-sm overflow-scroll"}>
            <Outlet />
        </div>
    );
};

export default RouterHolderView;
