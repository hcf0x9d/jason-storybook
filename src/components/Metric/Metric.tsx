import React from 'react';

interface MetricProps {
  label: string;
  value: string | number;
  helperText?: string;
}

export const Metric: React.FC<MetricProps> = ({ label, value, helperText }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white">
      <div className="text-sm text-gray-600 mb-1">{label}</div>
      <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
      {helperText && (
        <div className="text-xs text-gray-500">{helperText}</div>
      )}
    </div>
  );
};
