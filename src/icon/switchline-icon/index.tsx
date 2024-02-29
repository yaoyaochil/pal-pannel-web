
import type { GetProps } from 'antd';
import Icon from "@ant-design/icons";

type CustomIconComponentProps = GetProps<typeof Icon>;

const IconSvg = () => {
    return (<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox="0 0 24 24">
        <title>nintendo_switch_line</title>
        <g id="nintendo_switch_line" fill='none'>
            <path
                d='M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01-.184-.092Z'/>
            <path fill='#F5D601'
                  d='M10 3a1 1 0 0 1 .993.883L11 4v16a1 1 0 0 1-.883.993L10 21H6a4 4 0 0 1-3.995-3.8L2 17V7a4 4 0 0 1 3.8-3.995L6 3h4ZM9 5H6a2 2 0 0 0-1.995 1.85L4 7v10a2 2 0 0 0 1.85 1.995L6 19h3V5ZM6.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM18 3a4 4 0 0 1 3.995 3.8L22 7v10a4 4 0 0 1-3.8 3.995L18 21h-4a1 1 0 0 1-.993-.883L13 20V4a1 1 0 0 1 .883-.993L14 3h4Zm0 2h-3v14h3a2 2 0 0 0 1.995-1.85L20 17V7a2 2 0 0 0-1.85-1.995L18 5Zm-.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z'/>
        </g>
    </svg>);
};

const SwitchLineIcon = (props: Partial<CustomIconComponentProps>) => {
    return (
        <Icon component={IconSvg} {...props} />
    );
};

export default SwitchLineIcon;
