'use client';

import { useState } from 'react';
import FeaturesHero from '@/components/sections/FeaturesHero';
import FeatureDeepDive from '@/components/sections/FeatureDeepDive';
import ComparisonTable from '@/components/sections/ComparisonTable';
import IntegrationsHub from '@/components/sections/IntegrationsHub';

const tabs = ['CRM & Members', 'Payments', 'Inventory', 'Workouts', 'Analytics', 'Notifications'];

const featureData: Record<string, { title: string; desc: string; features: string[]; mockupItems: string[] }> = {
  'CRM & Members': {
    title: 'CRM & Members',
    desc: 'Manage your entire membership lifecycle — from leads to loyal members.',
    features: ['Comprehensive member profiles', 'Smart lead tracking & conversion', 'Custom tags & segmentation', 'Advanced search & filtering', 'Automated follow-ups'],
    mockupItems: ['All Members (247)', 'Active: 215', 'Expiring Soon: 18', 'New Leads: 14'],
  },
  'Payments': {
    title: 'Transactions & Accounting',
    desc: 'Seamless financial management that keeps your books balanced.',
    features: ['One-click payment processing', 'Automated receipt generation', 'Financial reporting & insights', 'Membership renewal tracking', 'Multi-plan support'],
    mockupItems: ['Monthly Revenue: ₹1.2L', 'Pending: ₹15,000', 'Collected Today: ₹8,500', 'Overdue: 6 members'],
  },
  'Inventory': {
    title: 'Inventory Management',
    desc: 'Track every product in your gym with intelligent automation.',
    features: ['Real-time stock tracking', 'AI-powered barcode scanning', 'Low stock alerts & reordering', 'Sales analytics per product', 'Supplier management'],
    mockupItems: ['Products: 84', 'Low Stock: 5', 'Sales Today: 12', 'Revenue: ₹4,200'],
  },
  'Workouts': {
    title: 'Workout Tracking',
    desc: 'Help your members crush their fitness goals with smart tracking.',
    features: ['Exercise logging & history', 'Progress visualization', 'Workout plan templates', 'Personal records tracking', 'Trainer-member sync'],
    mockupItems: ['Active Plans: 180', 'Sessions Today: 42', 'PRs This Week: 28', 'Avg Duration: 55m'],
  },
  'Analytics': {
    title: 'Analytics & Gamification',
    desc: 'Data-driven decisions with engaging member experiences.',
    features: ['Interactive dashboards', 'Member engagement scoring', 'Retention analytics', 'Achievement badges & streaks', 'Revenue forecasting'],
    mockupItems: ['Growth: +12%', 'Retention: 94%', 'NPS Score: 72', 'Avg Visit: 4.2/wk'],
  },
  'Notifications': {
    title: 'Smart Notifications',
    desc: 'Stay connected with your members through timely updates.',
    features: ['Payment reminders', 'Renewal alerts', 'Attendance notifications', 'Custom broadcast messages', 'WhatsApp integration'],
    mockupItems: ['Sent Today: 45', 'Opened: 38', 'Reminders Due: 12', 'Broadcasts: 3'],
  },
};

const comparisons = [
  { feature: 'AI Barcode Scanning', gymcave: true, compA: false, compB: false },
  { feature: 'Real-time Analytics', gymcave: true, compA: 'partial', compB: true },
  { feature: 'Payment Reminders', gymcave: true, compA: true, compB: false },
  { feature: 'Workout Tracking', gymcave: true, compA: false, compB: true },
  { feature: 'Multi-location Support', gymcave: true, compA: false, compB: false },
  { feature: 'WhatsApp Integration', gymcave: true, compA: false, compB: false },
  { feature: 'Gamification', gymcave: true, compA: false, compB: 'partial' },
];

const integrations = ['Firebase', 'Stripe', 'WhatsApp', 'Google Calendar', 'Razorpay', 'Twilio'];

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState('CRM & Members');
  const data = featureData[activeTab];

  return (
    <>
      <FeaturesHero 
        tabs={tabs} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      
      <FeatureDeepDive 
        activeTab={activeTab} 
        data={data} 
      />
      
      <ComparisonTable 
        comparisons={comparisons} 
      />
      
      <IntegrationsHub 
        integrations={integrations} 
      />
    </>
  );
}
