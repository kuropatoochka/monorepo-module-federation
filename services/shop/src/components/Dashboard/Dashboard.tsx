import { DepartmentData, GroupedBarChart } from "@packages/shared/src/components/GroupedBarChart";
import { useEffect, useState } from "react";
import fetchData from "@/data/data.json";



const Dashboard = () => {
  return (
    // <GroupedBarChart data={null} />
    <div>{fetchData.map(item => <p>{item.plan}</p>)}</div>
  );
};

export default Dashboard;