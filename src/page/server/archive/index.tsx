import {
  createArchive,
  getArchiveList,
  removeArchive,
  restoreArchive,
} from "@/api/palArchive";
import { PalArchive } from "@/global/type/palArchiveType";
import { Button, Popconfirm, Table, TableProps, message } from "antd";
import { useEffect, useState } from "react";
import ArchiveInfoFormView from "./components";

const ArchiveView = () => {
  const columns: TableProps<PalArchive>["columns"] = [
    {
      title: "ID",
      dataIndex: "ID",
      key: "ID",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "存档名称",
      dataIndex: "archiveName",
      key: "archiveName",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "存档描述",
      dataIndex: "archiveDesc",
      key: "archiveDesc",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "存档路径",
      dataIndex: "archivePath",
      key: "archivePath",
      render: (text) => (
        <Button
          type="default"
          onClick={() => {
            navigator.clipboard.writeText(text);
            message.success("拷贝成功");
          }}
        >
          拷贝文件路径
        </Button>
      ),
    },
    {
      title: "文件大小",
      dataIndex: "archiveSize",
      key: "archiveSize",
      render: (text) => <span>{text}kb</span>,
    },
    {
      title: "操作",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-3">
          <Popconfirm
            title={"确定要回档吗？"}
            okText={"确定"}
            cancelText={"取消"}
            onConfirm={() => {
              restore(record.ID);
            }}
          >
            <Button type="primary" className="mr-2">
              回档
            </Button>
          </Popconfirm>
          <Button type="default" className="mr-2">
            下载
          </Button>

          <Popconfirm
            title={"确定要删除存档吗？"}
            okText={"确定"}
            cancelText={"取消"}
            onConfirm={() => {
              deleteArchive(record.ID);
            }}
          >
            <Button type="primary" danger>
              删除
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const [archiveList, setArchiveList] = useState<PalArchive[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);

  const getArchiveData = async (data: { page: number; pageSize: number }) => {
    const res = await getArchiveList(data);
    if (res.code === 0) {
      setArchiveList(res.data.list);
      setTotal(res.data.total);
    }
  };

  // 表格分页
  const onTableChange: TableProps<PalArchive>["onChange"] = (pagination) => {
    setPage(pagination.current || 1);
    setPageSize(pagination.pageSize || 10);
  };

  // 备份存档
  const saveArchive = async (data: {
    archiveName: string;
    archiveDesc: string;
  }) => {
    const res = await createArchive({
      archiveName: data.archiveName,
      archiveDesc: data.archiveDesc,
    });
    if (res.code === 0) {
      getArchiveData({ page, pageSize });
    }
  };

  // 回档
  const restore = async (id: number) => {
    const res = await restoreArchive({ id });
    if (res.code === 0) {
      getArchiveData({ page, pageSize });
    }
  };

  // 删除存档
  const deleteArchive = async (id: number) => {
    const res = await removeArchive({ id });
    if (res.code === 0) {
      getArchiveData({ page, pageSize });
    }
  };

  useEffect(() => {
    // 获取存档列表 依赖分页参数 page pageSize
    getArchiveData({ page, pageSize });
  }, [page, pageSize]);

  return (
    <div className="h-full w-full">
      <div className="flex h-10 mb-2 items-center">
        <ArchiveInfoFormView onSubmit={saveArchive} />
        <span className="text-gray-500 font-bold">
          注意：归档服务器存档会同时归档服务器配置信息 如PalworldSettings.ini
          WorldOptions.save（用于解锁据点帕鲁上限作用）
        </span>
      </div>
      <Table
        size="middle"
        columns={columns}
        dataSource={archiveList}
        rowKey="ID"
        onChange={onTableChange}
        pagination={{ total: total, showSizeChanger: true }}
      />
    </div>
  );
};

export default ArchiveView;
