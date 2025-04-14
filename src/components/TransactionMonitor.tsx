
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, ArrowUpRight, CircleDollarSign, CornerDownRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Transaction {
  id: string;
  from: string;
  to: string;
  amount: number;
  currency: string;
  timestamp: string;
  risk: 'high' | 'medium' | 'low';
}

const sampleTransactions: Transaction[] = [
  {
    id: '0x3a21...5e72',
    from: '0x742d...1a3b',
    to: '0x9e8f...7d2c',
    amount: 12.45,
    currency: 'ETH',
    timestamp: '2 minutes ago',
    risk: 'high'
  },
  {
    id: '0x8c7b...2f19',
    from: '0xe12c...8d4a',
    to: '0x742d...1a3b',
    amount: 50000,
    currency: 'USDT',
    timestamp: '10 minutes ago',
    risk: 'medium'
  },
  {
    id: '0x2f58...9c43',
    from: '0xb71e...4c9d',
    to: '0x3f7a...2e8b',
    amount: 0.85,
    currency: 'BTC',
    timestamp: '25 minutes ago',
    risk: 'low'
  },
  {
    id: '0x6d9a...7b21',
    from: '0x742d...1a3b',
    to: '0x5c8e...1f7d',
    amount: 180000,
    currency: 'USDC',
    timestamp: '42 minutes ago',
    risk: 'high'
  },
  {
    id: '0x1e4f...3a8c',
    from: '0x3f7a...2e8b',
    to: '0x9e8f...7d2c',
    amount: 5.32,
    currency: 'ETH',
    timestamp: '1 hour ago',
    risk: 'medium'
  }
];

const TransactionMonitor: React.FC = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">
          Live Transactions
        </CardTitle>
        <Badge variant="outline" className="bg-chainwatch-blue/10 text-chainwatch-blue">
          Live
          <span className="ml-1 h-2 w-2 rounded-full bg-chainwatch-blue animate-pulse-slow"></span>
        </Badge>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0">
          {sampleTransactions.map((tx) => (
            <div 
              key={tx.id}
              className="flex items-center justify-between p-4 border-b border-border last:border-0 hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full 
                  ${tx.risk === 'high' ? 'bg-chainwatch-red/10' : tx.risk === 'medium' ? 'bg-chainwatch-yellow/10' : 'bg-chainwatch-green/10'}`}>
                  <CircleDollarSign className={`h-4 w-4 
                    ${tx.risk === 'high' ? 'text-chainwatch-red' : tx.risk === 'medium' ? 'text-chainwatch-yellow' : 'text-chainwatch-green'}`} />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium transaction-link">{tx.id}</span>
                    <ArrowUpRight className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <div className="flex text-xs text-muted-foreground items-center">
                    <span className="transaction-link">{tx.from.substring(0, 7)}...</span>
                    <CornerDownRight className="h-3 w-3 mx-1" />
                    <span className="transaction-link">{tx.to.substring(0, 7)}...</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1">
                  <span className="font-medium">{tx.amount} {tx.currency}</span>
                  {tx.risk === 'high' && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <AlertCircle className="h-4 w-4 text-chainwatch-red" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>High risk transaction</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
                <span className="text-xs text-muted-foreground">{tx.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionMonitor;
