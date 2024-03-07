import type { GetProps } from "antd";
import Icon from "@ant-design/icons";

type CustomIconComponentProps = GetProps<typeof Icon>;

const IconSvg = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.2322 13.5182L23.5355 8.21487C25.8135 5.93682 29.507 5.93682 31.7851 8.21488V8.21488C34.0631 10.4929 34.0631 14.1864 31.7851 16.4645L26.4818 21.7678M13.5181 18.2322L8.21484 23.5355C5.93678 25.8136 5.93678 29.507 8.21484 31.7851V31.7851C10.4929 34.0632 14.1864 34.0632 16.4644 31.7851L21.7677 26.4818"
        stroke="black"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M10 9.99999L7.50004 7.49999M14.1667 8.33333V5.83333M8.33337 14.1667H5.83337"
        stroke="black"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.6667 32.5L29.1667 30M31.6667 26.6667H34.1667M25.8334 31.6667V34.1667"
        stroke="black"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const UnlockIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={IconSvg} {...props} />;
};

export default UnlockIcon;
