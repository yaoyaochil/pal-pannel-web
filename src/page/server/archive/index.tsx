import { createArchive, getArchiveList, restoreArchive } from "@/api/palArchive";
import { PalArchive } from "@/global/type/palArchiveType";
import { Button, Table, TableProps, message } from "antd";
import { useEffect, useState } from "react";

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
      render: (text) => <Button type="default" onClick={() => {
        navigator.clipboard.writeText(text);
        message.success("拷贝成功");
      }}>拷贝文件路径</Button>,
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
          <Button type="primary" className="mr-2" onClick={() => {restore(record.ID)}}>
            回档
          </Button>
          <Button type="default" className="mr-2">
            下载
          </Button>
          <Button type="primary" danger>
            删除
          </Button>
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

  const onTableChange: TableProps<PalArchive>["onChange"] = (pagination) => {
    setPage(pagination.current || 1);
    setPageSize(pagination.pageSize || 10);
  };


  const saveArchive = async () => {
    const res = await createArchive({ archiveName: "test", archiveDesc: "test"});
    if (res.code === 0) {
      getArchiveData({ page, pageSize });
    }
  }

  const restore = async (id: number) => {
    const res = await restoreArchive({ id });
    if (res.code === 0) {
      getArchiveData({ page, pageSize });
    }
  }

  useEffect(() => {
    getArchiveData({ page, pageSize });
  }, [page, pageSize]);

  return (
    <div className="h-full w-full">
      <div className="flex h-10 mb-2">
        <Button type="primary" className="mr-2" onClick={saveArchive}>
          备份存档
        </Button>
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
