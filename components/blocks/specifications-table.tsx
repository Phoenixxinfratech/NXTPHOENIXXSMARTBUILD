import { cn } from '@/lib/utils';

interface Specification {
  label: string;
  value: string;
}

interface SpecificationsTableProps {
  title?: string;
  specifications: Specification[];
  className?: string;
  variant?: 'default' | 'striped' | 'bordered';
}

export function SpecificationsTable({
  title,
  specifications,
  className,
  variant = 'striped',
}: SpecificationsTableProps) {
  if (!specifications || specifications.length === 0) {
    return null;
  }

  return (
    <section className={cn('', className)}>
      {title && <h2 className="mb-6 text-2xl font-bold">{title}</h2>}

      <div className="overflow-hidden rounded-lg border">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Specification
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {specifications.map((spec, index) => (
              <tr
                key={index}
                className={cn(
                  variant === 'striped' && index % 2 === 0 && 'bg-muted/50',
                  variant === 'bordered' && 'border-t'
                )}
              >
                <td className="px-4 py-3 text-sm font-medium">{spec.label}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// Compact specs for cards
export function SpecificationsList({
  specifications,
  className,
}: {
  specifications: Specification[];
  className?: string;
}) {
  return (
    <dl className={cn('space-y-2', className)}>
      {specifications.map((spec, index) => (
        <div key={index} className="flex justify-between text-sm">
          <dt className="text-muted-foreground">{spec.label}</dt>
          <dd className="font-medium">{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}


