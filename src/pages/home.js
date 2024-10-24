import React from 'react'
import Banner from "../components/banner";
import Productlist from "../components/productlist";
import Levelup from "../components/levelup";
import Logos from "../components/logoclouds";
import Collection from "../components/collection";
import Simple_productivity from "../components/simpleproductivity";


const home = () => {
  return (
    <>
    <Banner />
    <Logos />
    <Productlist />
    <Levelup />
    <Collection />
    <Simple_productivity />
    </>
  )
}

export default home
