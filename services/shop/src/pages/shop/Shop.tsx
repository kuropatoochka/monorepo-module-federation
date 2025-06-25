import React from 'react';
import {shopRoutes} from "@packages/shared/src/routes/shop";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <Link to={shopRoutes.second}>Go to second page</Link>
    </div>
  );
};

export default Shop;