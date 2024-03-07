import { Alert, Button, Form, Input, Modal } from "antd";
import { useState } from "react";

// ArchiveInfoFormView
type ArchiveInfoFormViewProps = {
  // 提交回调
  onSubmit: (values: { archiveName: string; archiveDesc: string }) => void;
};

// ArchiveInfoFormView 存档信息表单视图
const ArchiveInfoFormView = (props: ArchiveInfoFormViewProps) => {
  const [dialogOpen, setDialogOpen] = useState(false); // dialog open state

  const [form] = Form.useForm(); // form instance

  return (
    <>
      <Button className="mr-3" onClick={() => setDialogOpen(true)}>
        备份存档
      </Button>
      <Modal
        open={dialogOpen}
        onCancel={() => setDialogOpen(false)}
        onOk={() => {
          setDialogOpen(false);
          props.onSubmit(form.getFieldsValue());
        }}
        closeIcon={false}
      >
        <Alert
          message="记录存档作用信息"
          type="info"
          showIcon
          className="mb-5"
        />
        <Form form={form}>
          <Form.Item<{ archiveName: string; archiveDesc: string }> label="存档名称" name={"archiveName"}>
            <Input />
          </Form.Item>
          <Form.Item<{ archiveName: string; archiveDesc: string }> label="存档描述" name={"archiveDesc"}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ArchiveInfoFormView;
