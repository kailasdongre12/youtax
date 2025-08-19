"use client";
import PageTitleBanner from '@/components/PageTitleBanner'
import React from 'react'
import WhoWeAre from './WhoWeAre';
import Vmp from './Vmp';
import Plans from './Plans';
import Cert from './Cert';
import Awards from './Awards';

export default function AboutUs() {
  return (
    <>
      {/* <PageTitleBanner/> */}
      <WhoWeAre/>
      <Vmp/>
      <Plans/>
      <Cert/>
      <Awards/>
    </>
  )
}
