'use client';

export function ProgressWidget({ percentage, completed, total }: { percentage: number, completed: number, total: number }) {
  const isComplete = percentage === 100 && total > 0;
  
  return (
    <div className={`bg-card border shadow-sm rounded-3xl p-6 flex flex-col items-center justify-center min-h-[220px] transition-colors duration-500 ${isComplete ? 'border-success ring-1 ring-success/20' : ''}`}>
      <h3 className="font-heading font-bold text-lg mb-6 self-start w-full">Daily Progress</h3>
      
      {/* Circular Progress Ring */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            className="text-muted stroke-current"
            strokeWidth="8"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
          ></circle>
          <circle
            className={`${isComplete ? 'text-success' : 'text-primary'} stroke-current transition-all duration-1000 ease-out`}
            strokeWidth="8"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            strokeDasharray={`${2 * Math.PI * 40}`}
            strokeDashoffset={2 * Math.PI * 40 * (1 - percentage / 100)}
          ></circle>
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          <span className={`text-3xl font-heading font-bold animate-in zoom-in duration-500 ${isComplete ? 'text-success' : 'text-foreground'}`}>
            {percentage}%
          </span>
        </div>
      </div>
      
      <p className="mt-6 text-sm font-medium text-muted-foreground bg-muted px-4 py-2 rounded-full">
        {completed} of {total} tasks completed
      </p>
    </div>
  );
}
