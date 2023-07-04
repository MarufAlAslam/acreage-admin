import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Surveys = () => {
  const [survey, setSurvey] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/survey", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSurvey(data);
      });
  }, []);

  //   console.log(mailings);

  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email Address",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  const data = survey.map((svy, index) => {
    return {
      key: index,
      fullName: svy.fullName,
      email: svy.email,
      phone: svy.phone,
      address: svy.address,
      action: (
        <div className="flex gap-2">
          <Link
            to={`details/${svy._id}`}
            className="px-4 py-2 bg-[#252D42] text-white rounded hover:bg-[#1D2433]"
          >
            View
          </Link>
        </div>
      ),
    };
  });

  return (
    <div className="overflow-x-auto">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Surveys;
