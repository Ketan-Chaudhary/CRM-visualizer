import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "Products",
  "Order ID",
  "Date",
  "Customer name",
  "Status",
  "Amount",
  "Action",
];

const TABLE_DATA = [
  {
    id: 100,
    name: "Samsung Galaxy S21",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "John Doe",
    status: "delivered",
    amount: 800,
  },
  {
    id: 101,
    name: "Google Pixel 6",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "John Doe",
    status: "pending",
    amount: 700,
  },
  {
    id: 102,
    name: "OnePlus 9 Pro",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "John Doe",
    status: "canceled",
    amount: 900,
  },
  {
    id: 103,
    name: "Xiaomi Mi 11",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "John Doe",
    status: "delivered",
    amount: 600,
  },
  {
    id: 104,
    name: "Huawei P40 Pro",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "John Doe",
    status: "delivered",
    amount: 700,
  },
  {
    id: 105,
    name: "Sony Xperia 1 III",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "John Doe",
    status: "delivered",
    amount: 1000,
  },
];

const AreaTable = () => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Latest Orders</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.order_id}</td>
                  <td>{dataItem.date}</td>
                  <td>{dataItem.customer}</td>
                  <td>
                    <div className="dt-status">
                      <span
                        className={`dt-status-dot dot-${dataItem.status}`}
                      ></span>
                      <span className="dt-status-text">{dataItem.status}</span>
                    </div>
                  </td>
                  <td>${dataItem.amount.toFixed(2)}</td>
                  <td className="dt-cell-action">
                    <AreaTableAction />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;
