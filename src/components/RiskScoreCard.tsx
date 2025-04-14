
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface RiskScoreCardProps {
  score: number;
  factors: string[];
}

const getRiskLevel = (score: number): { level: string; color: string } => {
  if (score >= 70) {
    return { level: "High", color: "risk-score-high" };
  } else if (score >= 40) {
    return { level: "Medium", color: "risk-score-medium" };
  } else {
    return { level: "Low", color: "risk-score-low" };
  }
};

const RiskScoreCard: React.FC<RiskScoreCardProps> = ({ score, factors }) => {
  const riskInfo = getRiskLevel(score);
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">
          Risk Assessment
        </CardTitle>
        <AlertTriangle 
          className={`h-4 w-4 ${score >= 70 ? 'text-chainwatch-red' : score >= 40 ? 'text-chainwatch-yellow' : 'text-chainwatch-green'}`} 
        />
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Risk Score</span>
          <span className={`text-xl font-bold ${riskInfo.color}`}>{score}</span>
        </div>
        <Progress value={score} max={100} className="h-2 mt-2" 
          color={score >= 70 ? 'red' : score >= 40 ? 'yellow' : 'green'} />
        <div className="mt-3">
          <span className="text-sm font-medium">Risk Level: <span className={riskInfo.color}>{riskInfo.level}</span></span>
        </div>
        <div className="mt-4">
          <span className="text-sm font-medium">Risk Factors:</span>
          <ul className="mt-2 text-sm space-y-1">
            {factors.map((factor, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-chainwatch-red mt-1">•</span>
                <span>{factor}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskScoreCard;
