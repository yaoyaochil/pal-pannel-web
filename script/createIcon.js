import fs from 'fs';
import readline from 'readline';
import prompt from 'prompt-sync';

const promptSync = prompt();

function generateComponentFile(componentName, svgContent) {
    const componentFolder = componentName.toLowerCase() + '-icon';
    const componentContent = `
import type { GetProps } from 'antd';
import Icon from "@ant-design/icons";

type CustomIconComponentProps = GetProps<typeof Icon>;

const IconSvg = () => {
    return (${svgContent});
};

const ${componentName}Icon = (props:Partial<CustomIconComponentProps>) => {
    return (
        <Icon component={IconSvg} {...props} />
    );
};

export default ${componentName}Icon;
`;

    const folderPath = `./src/icon/${componentFolder}`;
    const filePath = `${folderPath}/index.tsx`;

    try {
        fs.mkdirSync(folderPath, { recursive: true }); // 创建文件夹，recursive 参数确保父文件夹不存在时也能创建
        fs.writeFileSync(filePath, componentContent);
        console.log(`Icon component file "${filePath}" successfully created.`);
    } catch (error) {
        console.error(`Error creating ${filePath}: ${error}`);
    }
}

function main() {
    const componentName = promptSync('输入图标组件名称: ');

    process.stdin.setRawMode(true); // 设置为原始模式，隐藏用户输入
    let svgContent = '';

    process.stdout.write('输入图标Svg代码: ');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false // 禁用 readline 的内置终端
    });

    process.stdin.on('data', (key) => {
        const strKey = key.toString('utf-8');

        if (strKey === '\r' || strKey === '\n') {
            // 用户按下回车键时结束输入
            process.stdin.setRawMode(false); // 恢复标准模式
            rl.close();
            generateComponentFile(componentName, svgContent);
        } else {
            svgContent += strKey;
        }
    });
}

main();
