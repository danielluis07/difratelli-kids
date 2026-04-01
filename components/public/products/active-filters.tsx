"use client";

import { XIcon } from "lucide-react";

interface ActiveFilter {
  key: string;
  label: string;
  value: string;
}

interface ActiveFiltersProps {
  filters: ActiveFilter[];
  onRemove: (key: string) => void;
  onClearAll: () => void;
}

export const ActiveFilters = ({
  filters,
  onRemove,
  onClearAll,
}: ActiveFiltersProps) => {
  if (filters.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {filters.map((filter) => (
        <button
          key={filter.key}
          type="button"
          onClick={() => onRemove(filter.key)}
          className="group inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/80 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur-sm transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary">
          <span className="text-muted-foreground/70">{filter.label}:</span>
          {filter.value}
          <XIcon className="size-3 text-muted-foreground/50 transition-colors group-hover:text-primary" />
        </button>
      ))}

      {filters.length > 1 && (
        <button
          type="button"
          onClick={onClearAll}
          className="px-2 py-1 text-xs font-medium text-muted-foreground/70 transition-colors hover:text-foreground">
          Limpar filtros
        </button>
      )}
    </div>
  );
};
