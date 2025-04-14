
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FolderOpen, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Case {
  id: string;
  title: string;
  status: 'open' | 'closed' | 'pending';
  priority: 'high' | 'medium' | 'low';
  created: string;
  addresses: string[];
}

const cases: Case[] = [
  {
    id: 'CS-2023-104',
    title: 'Ransomware Payment Investigation',
    status: 'open',
    priority: 'high',
    created: '2023-04-05',
    addresses: ['0x742d...1a3b', '0x9e8f...7d2c']
  },
  {
    id: 'CS-2023-098',
    title: 'Dark Market Activity',
    status: 'open',
    priority: 'medium',
    created: '2023-04-02',
    addresses: ['0xe12c...8d4a', '0xb71e...4c9d']
  },
  {
    id: 'CS-2023-092',
    title: 'Exchange Account Compromise',
    status: 'pending',
    priority: 'medium',
    created: '2023-03-28',
    addresses: ['0x5c8e...1f7d', '0x3f7a...2e8b']
  },
  {
    id: 'CS-2023-087',
    title: 'NFT Theft Investigation',
    status: 'closed',
    priority: 'low',
    created: '2023-03-25',
    addresses: ['0x2f58...9c43']
  }
];

const CaseManagement: React.FC = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">
          Active Cases
        </CardTitle>
        <Badge variant="outline">
          {cases.filter(c => c.status === 'open').length} Open
        </Badge>
      </CardHeader>
      <CardContent className="p-0 overflow-auto">
        <div className="space-y-0">
          {cases.map((c) => (
            <div 
              key={c.id}
              className="flex items-center justify-between p-4 border-b border-border last:border-0 hover:bg-accent/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full 
                  ${c.priority === 'high' ? 'bg-chainwatch-red/10' : 
                    c.priority === 'medium' ? 'bg-chainwatch-yellow/10' : 
                    'bg-chainwatch-green/10'}`}>
                  <FolderOpen className={`h-4 w-4 
                    ${c.priority === 'high' ? 'text-chainwatch-red' : 
                      c.priority === 'medium' ? 'text-chainwatch-yellow' : 
                      'text-chainwatch-green'}`} />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{c.id}</span>
                    <Badge 
                      variant="outline" 
                      className={`
                        ${c.status === 'open' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                          c.status === 'closed' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                          'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'}
                      `}
                    >
                      {c.status.charAt(0).toUpperCase() + c.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="flex text-sm font-medium">
                    {c.title}
                  </div>
                  <div className="flex gap-2">
                    {c.addresses.map((addr, idx) => (
                      <span key={idx} className="text-xs transaction-link">
                        {addr}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                {c.created}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CaseManagement;
