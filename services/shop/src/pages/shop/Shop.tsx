import React from 'react';
import {shopRoutes} from "@packages/shared/src/routes/shop";
import { Link } from "react-router-dom";
import Dashboard from "@/components/Dashboard/Dashboard";

const Shop = () => {
  return (
    <div>
      <Link to={shopRoutes.second}>Go to second page</Link>
      <Dashboard />
    </div>
  );
};

export default Shop;