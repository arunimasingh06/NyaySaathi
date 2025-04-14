
import React from 'react';
import TransactionMonitor from './TransactionMonitor';
import RiskScoreCard from './RiskScoreCard';
import TransactionGraph from './TransactionGraph';
import AddressExplorer from './AddressExplorer';
import CaseManagement from './CaseManagement';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertOctagon, AlertTriangle, TrendingUp, CreditCard, Landmark, Search } from 'lucide-react';

// Sample risk factors for the demo
const riskFactors = [
  "Multiple connections to known mixers",
  "Transactions from flagged dark markets",
  "Recent high-velocity fund movement",
  "Association with known ransomware wallet"
];

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 p-4">
      {/* Stats Row */}
      <div className="col-span-full grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Monitored Networks
            </CardTitle>
            <Landmark className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">
              BTC, ETH, BNB, SOL, MATIC, ADA, XRP
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Suspicious Transactions
            </CardTitle>
            <AlertOctagon className="h-4 w-4 text-chainwatch-red" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">154</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chainwatch-red">+12%</span> from yesterday
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Flagged Wallets
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-chainwatch-yellow" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,851</div>
            <p className="text-xs text-muted-foreground">
              87 added this week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Transaction Volume
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$42.8M</div>
            <p className="text-xs text-muted-foreground">
              In last 24 hours
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Transaction Monitor */}
      <div className="col-span-full lg:col-span-6 xl:col-span-4">
        <TransactionMonitor />
      </div>
      
      {/* Risk Assessment + Address Explorer */}
      <div className="col-span-full md:col-span-3 lg:col-span-3 xl:col-span-2 space-y-4">
        <RiskScoreCard score={82} factors={riskFactors} />
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Quick Search
            </CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Search wallet address or transaction hash</p>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="p-2 border border-border rounded-md cursor-pointer hover:bg-accent transition-colors text-sm">
                <CreditCard className="h-4 w-4 mx-auto mb-1" />
                Wallet
              </div>
              <div className="p-2 border border-border rounded-md cursor-pointer hover:bg-accent transition-colors text-sm">
                <TrendingUp className="h-4 w-4 mx-auto mb-1" />
                Transaction
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Case Management */}
      <div className="col-span-full lg:col-span-6 xl:col-span-3">
        <CaseManagement />
      </div>
      
      {/* Graphs */}
      <div className="col-span-full md:col-span-3 lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <TransactionGraph graphTitle="Transaction Volume (24h)" graphType="area" />
        <TransactionGraph graphTitle="Transaction Count (24h)" graphType="line" />
      </div>
      
      {/* Address Explorer */}
      <div className="col-span-full md:col-span-3 lg:col-span-6">
        <AddressExplorer />
      </div>
    </div>
  );
};

export default Dashboard;
