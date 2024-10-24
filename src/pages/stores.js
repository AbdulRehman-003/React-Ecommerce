import React from 'react';
import Nav2 from "../components/nav2";
import Bags from "../components/bags";
import Tees from "../components/tees";
import Productlist from "../components/productlist";
import Collection from "../components/collection";
const stores = () => {
  return (
    <>
    <Nav2 />
    <Tees />
    <Bags />
    <Productlist />
    <Collection />
    </>
  )
}

export default stores
