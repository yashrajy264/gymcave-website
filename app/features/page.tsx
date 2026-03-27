'use client';

import { useState } from 'react';
import FeaturesHero from '@/components/sections/FeaturesHero';
import FeatureDeepDive from '@/components/sections/FeatureDeepDive';
import styles from './FeaturesPage.module.css';

const tabs = [
  'Admin Dashboard', 'Member Profile', 'Analytics', 'Pricing & Plans',
  'Staff Management', 'Leads Funnel', 'Inventory', 'Gym Code',
  'Member Dashboard', 'Health Report'
];

const featureData: Record<string, { title: string; desc: string; features: string[]; image: string }> = {
  'Admin Dashboard': {
    title: 'Admin Dashboard',
    desc: 'Your gym\'s command center. See active members, revenue, and key metrics at a glance.',
    features: ['Real-time attendance tracking', 'Revenue overviews', 'Quick-action shortcuts', 'Daily task summaries'],
    image: '/images/Screenshot_20260327_141730.png'
  },
  'Member Profile': {
    title: 'Member Profile',
    desc: 'Comprehensive view of every individual member\'s journey and status.',
    features: ['Personal details & emergency contacts', 'Active plan status', 'Attendance history log', 'Payment history & invoices'],
    image: '/images/Screenshot_20260327_141859.png'
  },
  'Analytics': {
    title: 'Analytics Page',
    desc: 'Deep dive into your gym\'s performance with visual data charts.',
    features: ['Membership growth trends', 'Revenue forecasting', 'Peak hour heatmaps', 'Retention drop-off analysis'],
    image: '/images/Screenshot_20260327_141919.png'
  },
  'Pricing & Plans': {
    title: 'Custom Price & Plans',
    desc: 'Flexible pricing models. Create and manage custom gym membership plans instantly.',
    features: ['Multi-tier subscription models', 'Custom discounts & promo codes', 'Trial period configuration', 'Automated recurring billing'],
    image: '/images/Screenshot_20260327_141957.png'
  },
  'Staff Management': {
    title: 'Staff Management',
    desc: 'Organize your team, assign roles, and track trainer schedules easily.',
    features: ['Role-based access control', 'Trainer scheduling', 'Payroll tracking', 'Performance metrics tracking'],
    image: '/images/Screenshot_20260327_142058.png'
  },
  'Leads Funnel': {
    title: 'Leads Funnel',
    desc: 'Capture, track, and convert prospective members seamlessly without losing any opportunities.',
    features: ['Automated lead capturing', 'Follow-up reminders', 'Conversion rate tracking', 'Pipeline stage management'],
    image: '/images/Screenshot_20260327_142216.png'
  },
  'Inventory': {
    title: 'Inventory Management',
    desc: 'Track supplements, merchandise, and gym supplies directly from your dashboard.',
    features: ['Low-stock alerts', 'Point of sale billing', 'Profit margins tracking', 'Inventory audit logs'],
    image: '/images/Screenshot_20260327_142447.png'
  },
  'Gym Code': {
    title: 'Gym Code & Access',
    desc: 'Universal gym codes for members to easily onboard, attend, and interact with the facility.',
    features: ['QR code generation', 'Self-service check-in kiosk', 'Guest passes & trial codes', 'Hardware entry integrations'],
    image: '/images/Screenshot_20260327_142601.png'
  },
  'Member Dashboard': {
    title: 'Member Dashboard',
    desc: 'The member-facing portal. Members can see their plan quotas, upcoming renewals, and metrics.',
    features: ['Active plan details view', 'Payment history & invoices', 'Attendance records', 'Self-service renewals'],
    image: '/images/Screenshot_20260327_142650.png'
  },
  'Health Report': {
    title: 'Health Report',
    desc: 'Provide immense value to your members by tracking their body metrics and health journey.',
    features: ['Body composition tracking', 'Progress charting', 'BMI & metric history', 'Trainer assessment notes'],
    image: '/images/Screenshot_20260327_143020.png'
  }
};

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState('Admin Dashboard');

  const activeIndex = tabs.indexOf(activeTab);

  const handleNext = () => {
    setActiveTab(tabs[(activeIndex + 1) % tabs.length]);
  };

  const handlePrev = () => {
    setActiveTab(tabs[(activeIndex - 1 + tabs.length) % tabs.length]);
  };

  return (
    <>
      <FeaturesHero 
        tabs={tabs} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      
      {/* Desktop View: Tabbed Layout */}
      <div className={styles.desktopView}>
        <FeatureDeepDive 
          activeTab={activeTab} 
          data={featureData[activeTab]} 
        />
      </div>

      {/* Mobile View: Single Feature with Chevrons */}
      <div className={`${styles.mobileView} container pb-20 mt-8 flex-col gap-8`}>
        <FeatureDeepDive 
          activeTab={activeTab} 
          data={featureData[activeTab]} 
          isMobileCard={true} 
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </>
  );
}
