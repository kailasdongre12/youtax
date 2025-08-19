'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const pageData = {
  '/about-us': {
    title: 'Your Trusted Partner in Financial Success',
    subtitle: '“Decades of experience in delivering tailored financial solutions with integrity and excellence”',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  },
  '/services/income-tax-audit': {
    title: 'Income Tax Audit',
    subtitle: 'Affordable and accurate audits tailored to your business',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  },
  '/services/company-audit': {
    title: 'Company Audit',
    subtitle: 'Affordable and accurate audits tailored to your business',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  },
  '/services/company-incorporation': {
    title: 'Company Incorporation',
    subtitle: 'Affordable and accurate audits tailored to your business',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  },
    '/services/gst-e-filing': {
    title: 'Gst E-Filing',
    subtitle: 'Affordable and accurate audits tailored to your business',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  },
  '/services/llp-incorporation': {
    title: 'LLP Incorporation',
    subtitle: 'Affordable and accurate audits tailored to your business',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  },
  '/services/pf-and-esic-registration': {
    title: 'PF and ESIC Registration',    
    subtitle: 'Affordable and accurate audits tailored to your business',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  },
  '/services/tds-preparation-and-e-filing': {
    title: 'TDS Preparation and E-Filing',
    subtitle: 'Affordable and accurate audits tailored to your business',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  },
  '/services/accounting': {
    title: 'Accounting Services',
    subtitle: 'Best Accounting Services in Pune for Financial Success',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  },
  '/services/digital-signature': {
    title: 'Digital Signature', 
    subtitle: 'Get Your Digital Signature Easily with YouTax',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  },
  '/services/food-license': {
    title: 'Food License',
    subtitle: 'Expert Assistance in Food License Registration',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  },
  '/services/pan-application': {
    title: 'PAN Application', 
    subtitle: 'Streamline Your PAN Application with YouTax',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  },
    '/services/Gst-Registration': {
    title: 'Gst Registration', 
    subtitle: 'Streamline Your PAN Application with YouTax',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  },
       '/services/income-tax-e-filing': {
    title: 'IncomeTax-E-Filing', 
    subtitle: 'Streamline Your PAN Application with YouTax',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  },
      '/services/partnership-firm-registration': {
    title: 'Partnership Firm Ragistration', 
    subtitle: 'Streamline Your PAN Application with YouTax',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  },
      '/services/professional-tax': {
    title: 'Professional Tax', 
    subtitle: 'Streamline Your PAN Application with YouTax',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  },
 '/services/project-report': {
    title: 'PROJECT REPORT', 
    subtitle: 'Streamline Your PAN Application with YouTax',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  },
   '/services/roc-compliances': {
    title: 'ROC COMPLIANCES', 
    subtitle: 'Streamline Your PAN Application with YouTax',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  },
   '/services/shop-act-license': {
    title: 'Shop Act License', 
    subtitle: 'Streamline Your PAN Application with YouTax',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  },
   '/services/tan-application': {
    title: 'TAN APPLICATION', 
    subtitle: 'Streamline Your PAN Application with YouTax',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  },
   '/services/trademark-registration': {
    title: 'Trademark Registration', 
    subtitle: 'Streamline Your PAN Application with YouTax',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  },
   '/services/udyam-registration': {
    title: 'Udyam Registration', 
    subtitle: 'Streamline Your PAN Application with YouTax',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  },
   '/services/hireanaccountant': {
    title: 'Hire An Accountant', 
    subtitle: 'Streamline Your PAN Application with YouTax',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  },
   
  '/blog': {
    title: 'Blog',
    subtitle: 'Insights, stories, and updates',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  },
  '/solutions':{
    title: 'Solutions',
    subtitle: 'Insights, stories, and updates',
    backgroundImage: '/assets/page-title/aboutBanner.png',
  }
};

const PageTitleBanner = () => {
  const pathname = usePathname();
  const data = pageData[pathname];

  if (!data) return null;

  return (
    <div className="relative w-full h-[60vh] flex items-center justify-center text-center">
      <Image
        src={data.backgroundImage}
        alt={data.title}
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="z-20 text-white px-4">
        <h1 className="text-4xl font-semibold primaryText">{data.title}</h1>
        <hr className='w-30 mx-auto my-2 border-t-3'/>
        {data.subtitle && <p className="mt-2 text-lg">{data.subtitle}</p>}
      </div>
    </div>
  );
};

export default PageTitleBanner;
