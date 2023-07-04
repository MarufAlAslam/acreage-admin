import { Table } from "antd";
import React, { useEffect, useState } from "react";

const MailingList = () => {
  const [mailings, setMailings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/mailingList", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMailings(data);
      });
  }, []);

  //   console.log(mailings);

  const columns = [
    {
      title: "Full Name",
      dataIndex: "full_name",
    },
    {
      title: "Email Address",
      dataIndex: "email_address",
    },
  ];

  const data = mailings.map((mailing, index) => {
    return {
      key: index,
      full_name: mailing.fullName,
      email_address: mailing.email,
    };
  });

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default MailingList;
