import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type Status = 
  | 'draft' | 'invited' | 'proposed' | 'countered' | 'accepted' 
  | 'in-progress' | 'in-review' | 'revisions' | 'approved' 
  | 'completed' | 'disputed' | 'pending' | 'active' | 'paused' | 'cancelled';

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

const statusConfig: Record<Status, { variant: any; label: string; className?: string }> = {
  draft: { variant: 'outline', label: 'Draft' },
  invited: { variant: 'secondary', label: 'Invited', className: 'bg-blue-100 text-blue-800 border-blue-200' },
  proposed: { variant: 'secondary', label: 'Proposed', className: 'bg-purple-100 text-purple-800 border-purple-200' },
  countered: { variant: 'secondary', label: 'Countered', className: 'bg-orange-100 text-orange-800 border-orange-200' },
  accepted: { variant: 'default', label: 'Accepted', className: 'bg-green-100 text-green-800 border-green-200' },
  'in-progress': { variant: 'secondary', label: 'In Progress', className: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
  'in-review': { variant: 'secondary', label: 'In Review', className: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
  revisions: { variant: 'secondary', label: 'Revisions', className: 'bg-red-100 text-red-800 border-red-200' },
  approved: { variant: 'default', label: 'Approved', className: 'bg-green-100 text-green-800 border-green-200' },
  completed: { variant: 'default', label: 'Completed', className: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  disputed: { variant: 'destructive', label: 'Disputed' },
  pending: { variant: 'outline', label: 'Pending' },
  active: { variant: 'default', label: 'Active' },
  paused: { variant: 'secondary', label: 'Paused' },
  cancelled: { variant: 'destructive', label: 'Cancelled' }
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <Badge 
      variant={config.variant}
      className={cn(config.className, className)}
    >
      {config.label}
    </Badge>
  );
}