import React from 'react';
import '../styles/Home.css';
import MainNav from '../components/MainNav/MainNav';
import DetailSection from '../components/DetailSection/DetailSection';
import MainFooterSection from '../components/MainFooterSection/MainFooterSection';

export default function Home() {
  return (
    <div className="home-container">
      <MainNav />
      <DetailSection />
      <MainFooterSection/>      
        </div>
  );
}