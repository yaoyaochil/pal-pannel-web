import {Avatar} from "antd";


const LogoView = () => {
    return (
        <div className={"h-full flex items-center gap-3"}>
            <Avatar size={38} src={"https://img.imdodo.com/openapitest/upload/cdn/F121D135F39F03E48DA5FE5E8CED5B0A_1707121292978.jpg"} />
            <div className={"text-16 font-bold"}>Palserver</div>
        </div>
    );
}

export default LogoView;