import { Card, CardDescription, CardTitle } from "@/components/ui/card";

interface StatusCardProps {
  title: string;
  description?: string;
  isError?: boolean;
}

const StatusCard = ({
  title,
  description,
  isError = false,
}: StatusCardProps) => (
  <Card className="bg-slate-50 p-6 dark:bg-neutral-900">
    <CardTitle className={isError ? "text-red-500" : ""}>{title}</CardTitle>
    {description && (
      <CardDescription className="text-center">{description}</CardDescription>
    )}
  </Card>
);

export default StatusCard;
