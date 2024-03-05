
import type { GetProps } from 'antd';
import Icon from "@ant-design/icons";

type CustomIconComponentProps = GetProps<typeof Icon>;

const IconSvg = () => {
    return (<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
};

const UnlockIcon = (props:Partial<CustomIconComponentProps>) => {
    return (
        <Icon component={IconSvg} {...props} />
    );
};

export default UnlockIcon;