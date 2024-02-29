
import type { GetProps } from 'antd';
import Icon from "@ant-design/icons";

type CustomIconComponentProps = GetProps<typeof Icon>;

const IconSvg = () => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox="0 0 24 24"><title>game_1_line</title>
            <g id="game_1_line" fill='none'>
                <path
                    d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z'/>
                <path fill='#F5D601'
                      d='M12 3a1 1 0 0 1 1 1v1h1.5a7.5 7.5 0 0 1 0 15h-5a7.5 7.5 0 0 1 0-15H11V4a1 1 0 0 1 1-1Zm2.5 4h-5a5.5 5.5 0 1 0 0 11h5a5.5 5.5 0 1 0 0-11Zm1 3a1 1 0 0 1 .993.883L16.5 11v.5h.5a1 1 0 0 1 .117 1.993L17 13.5h-.5v.5a1 1 0 0 1-1.993.117L14.5 14v-.5H14a1 1 0 0 1-.117-1.993L14 11.5h.5V11a1 1 0 0 1 1-1Zm-7 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm0 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Z'/>
            </g>
        </svg>);
};

const GameLineIcon = (props: Partial<CustomIconComponentProps>) => {
    return (
        <Icon component={IconSvg} {...props} />
    );
};

export default GameLineIcon;
