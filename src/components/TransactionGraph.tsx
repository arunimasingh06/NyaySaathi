
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

// Sample data for the chart
const transactionData = [
  { name: 'Jan', transactions: 400, volume: 2400 },
  { name: 'Feb', transactions: 300, volume: 1398 },
  { name: 'Mar', transactions: 520, volume: 3800 },
  { name: 'Apr', transactions: 270, volume: 3908 },
  { name: 'May', transactions: 590, volume: 4800 },
  { name: 'Jun', transactions: 390, volume: 3800 },
  { name: 'Jul', transactions: 490, volume: 4300 },
];

interface TransactionGraphProps {
  graphTitle: string;
  graphType: 'line' | 'area';
}

const TransactionGraph: React.FC<TransactionGraphProps> = ({ graphTitle, graphType }) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-sm font-medium">{graphTitle}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            {graphType === 'line' ? (
              <LineChart
                data={transactionData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(100,116,139, 0.2)" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '0.375rem' }}
                  itemStyle={{ color: '#e2e8f0' }}
                  labelStyle={{ color: '#94a3b8' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="transactions" 
                  stroke="#0284c7" 
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4 }}
                />
              </LineChart>
            ) : (
              <AreaChart
                data={transactionData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(100,116,139, 0.2)" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '0.375rem' }}
                  itemStyle={{ color: '#e2e8f0' }}
                  labelStyle={{ color: '#94a3b8' }}
                />
                <Area 
                  type="monotone"
                  dataKey="volume"
                  stroke="#0284c7"
                  fill="rgba(2, 132, 199, 0.1)"
                />
              </AreaChart>
            )}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionGraph;
