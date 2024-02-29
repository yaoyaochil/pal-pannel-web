# 幻兽帕鲁 服务器管理系统 Web端

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![typescript](https://img.shields.io/badge/Typescript-use-blue)](https://reactjs.org/)


欢迎来到 pal-pannel-web 服务器管理系统的 GitHub 仓库！该系统旨在简化服务器管理任务，为您提供一个全面的解决方案，以高效管理您的服务器。

## 特性

- **用户友好的界面**：直观的界面设计使用户能够轻松地导航和执行任务。
- **实时监控玩家**：您可以实时监控服务器上的玩家，以便及时采取行动。
- **更安全更自由的保管存档**：通过简单的步骤，您可以轻松地备份和还原服务器数据。

## 截图

以下是 pal-pannel 服务器管理系统目前的一些截图：

<img width="1919" alt="image" src="https://private-user-images.githubusercontent.com/49603204/308928810-af650dec-b130-4705-a28a-707ab3ef19a7.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDkyMjI1ODEsIm5iZiI6MTcwOTIyMjI4MSwicGF0aCI6Ii80OTYwMzIwNC8zMDg5Mjg4MTAtYWY2NTBkZWMtYjEzMC00NzA1LWEyOGEtNzA3YWIzZWYxOWE3LmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIyOVQxNTU4MDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yMjVlMDkxNDhhMjZlNGJhODdiY2I4NzMzNmFhMGZhZjU3NDI4N2M5MjJkODdiODg3NzJlZjc4ZTdlYThlYTJhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.wXxeyCE0Ci4FDLKmdD1dwAaP14abEQfDH_u8eYJRAxk">
<img width="1919" alt="image" src="https://private-user-images.githubusercontent.com/49603204/308928786-7a4b4780-5925-42b5-967e-8a2559aea7da.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDkyMjI1ODEsIm5iZiI6MTcwOTIyMjI4MSwicGF0aCI6Ii80OTYwMzIwNC8zMDg5Mjg3ODYtN2E0YjQ3ODAtNTkyNS00MmI1LTk2N2UtOGEyNTU5YWVhN2RhLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIyOVQxNTU4MDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zZThlMDRkMzkyNDgzYWY3YzJlM2I4YmFjZTQ2NDcxM2FkNTRjYjMyMGQ3NjIzODcyMjY5Y2FhMjAzYTIwMDE0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.8xXgiNuZh__b8uAEhmwZcznAyUQEZgRZDPG800vULIg">
<img width="1918" alt="image" src="https://private-user-images.githubusercontent.com/49603204/308928835-e59146f2-91a8-4cca-ac2e-b0faee6cb710.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDkyMjI1ODEsIm5iZiI6MTcwOTIyMjI4MSwicGF0aCI6Ii80OTYwMzIwNC8zMDg5Mjg4MzUtZTU5MTQ2ZjItOTFhOC00Y2NhLWFjMmUtYjBmYWVlNmNiNzEwLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIyOVQxNTU4MDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04ZmY4YzQxNDA4Nzc5NWZlMzY2YmJkNWNjMjI1YjcyMmE3ZmQyZTZkYmU1ZDA0MTQxYmE1NzVhNGRhNWQwYzUzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.PvuO6QlCmTmdkhlGEVvAsTbw7SThM31ve8OBjitz2mY">




## 快速开始

要开始使用 pal-pannel-web 服务器管理系统，请按照以下步骤操作：

1. **克隆仓库**：使用以下命令将此仓库克隆到您的本地计算机：
```bash
git clone https://github.com/yaoyaochil/pal-pannel-web.git
```

2. **安装依赖**：进入项目目录并安装依赖：
```bash
npm install
```

3. **运行应用程序**：通过运行以下命令启动应用程序：

```bash
npm run dev
```

4. **访问应用程序**：在浏览器中访问 `http://localhost:5173`。


## 贡献

我们欢迎社区对 pal-pannel 服务器管理系统进行贡献。如果您想贡献，请遵循以下准则：

- 派生仓库并为您的功能或错误修复创建一个新分支。
- 进行您的更改，并确保代码通过所有测试。
- 提交一个带有您更改清晰描述的拉取请求。

## 交流群

如果您有任何问题或建议，请加入我们的wechat群，我们将很乐意与您交流。

![101709224238_ pic](https://github.com/yaoyaochil/pal-pannel-web/assets/49603204/eca40145-ea84-4cab-ab29-62cbdbcfb496)
## 许可证
MIT