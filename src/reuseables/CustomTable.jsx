import { Table } from "@arco-design/web-react";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    fixed: "left",
    width: 140,
    sorter: {
      compare: (a, b) => a.name - b.name,
      multiple: 1,
    },
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Other",
    dataIndex: "other",
    render: () => "Other",
  },
  {
    title: "Other 1",
    dataIndex: "other1",
    render: () => "Other 1",
  },
  {
    title: "Other 2",
    dataIndex: "other2",
    render: () => "Other 2",
  },
  {
    title: "Salary",
    dataIndex: "salary",
    fixed: "right",
    width: 120,
  },
];
const data = [
  {
    key: "1",
    name: "Jane Doe",
    salary: 23000,
    address: "32 Park Road, London",
    email: "jane.doe@example.com",
  },
  {
    key: "2",
    name: "Alisa Ross",
    salary: 25000,
    address: "35 Park Road, London",
    email: "alisa.ross@example.com",
  },
  {
    key: "3",
    name: "Kevin Sandra",
    salary: 22000,
    address: "31 Park Road, London",
    email: "kevin.sandra@example.com",
  },
  {
    key: "4",
    name: "Ed Hellen",
    salary: 17000,
    address: "42 Park Road, London",
    email: "ed.hellen@example.com",
  },
  {
    key: "5",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
];

const CustomTable = ({ Apidata }) => {
  return (
    <Table
      columns={columns}
      data={Apidata || data}
      expandedRowRender={(record) =>
        `${record.name}'s address is ${record.address}`
      }
      rowSelection={{}}
      onChange={(pagination, changedSorter) => {
        console.log(changedSorter);
      }}
      scroll={{
        x: 1600,
        y: 400,
      }}
    />
  );
};

export default CustomTable;
