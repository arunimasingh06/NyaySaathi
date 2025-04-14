
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, ExternalLink, User, Building2, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface AddressInfo {
  address: string;
  balance: string;
  transactions: number;
  identity?: {
    name?: string;
    type: 'individual' | 'organization' | 'unknown';
    tags: string[];
  };
  riskScore: number;
}

const sampleAddress: AddressInfo = {
  address: '0x742d35Cc6634C0532925a3b844Bc454e4438f1a3b',
  balance: '256.73 ETH ($546,829.45)',
  transactions: 872,
  identity: {
    name: 'Suspicious Entity #127',
    type: 'organization',
    tags: ['mixer', 'exchange', 'dark market']
  },
  riskScore: 85
};

const AddressExplorer: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [addressInfo, setAddressInfo] = useState<AddressInfo | null>(null);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would fetch address data
    setAddressInfo(sampleAddress);
  };
  
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-sm font-medium">Address Explorer</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSearch} className="flex space-x-2 mb-4">
          <Input
            placeholder="Search address or transaction hash..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </form>
        
        {addressInfo && (
          <div className="space-y-4 pt-2">
            <div className="p-4 bg-accent rounded-lg">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs break-all pr-2">{addressInfo.address}</span>
                <ExternalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-accent/50 rounded-lg">
                <div className="text-xs text-muted-foreground">Balance</div>
                <div className="font-medium">{addressInfo.balance}</div>
              </div>
              <div className="p-4 bg-accent/50 rounded-lg">
                <div className="text-xs text-muted-foreground">Transactions</div>
                <div className="font-medium">{addressInfo.transactions}</div>
              </div>
            </div>
            
            {addressInfo.identity && (
              <div className="border border-border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  {addressInfo.identity.type === 'individual' ? (
                    <User className="h-4 w-4 text-chainwatch-blue" />
                  ) : addressInfo.identity.type === 'organization' ? (
                    <Building2 className="h-4 w-4 text-chainwatch-blue" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-chainwatch-yellow" />
                  )}
                  <span className="font-medium">
                    {addressInfo.identity.name || 'Unknown Identity'}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {addressInfo.identity.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            <div className="p-4 bg-chainwatch-red/10 border border-chainwatch-red/20 rounded-lg flex items-center justify-between">
              <span className="text-sm font-medium">Risk Score</span>
              <span className="text-lg font-bold text-chainwatch-red">{addressInfo.riskScore}</span>
            </div>
          </div>
        )}
        
        {!addressInfo && (
          <div className="flex flex-col items-center justify-center h-48 text-center">
            <Search className="h-12 w-12 text-muted-foreground/30 mb-4" />
            <h3 className="text-lg font-semibold">Search for an address</h3>
            <p className="text-sm text-muted-foreground">
              Enter a blockchain address or transaction hash to view details
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AddressExplorer;
