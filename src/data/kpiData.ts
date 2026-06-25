import type { ReactNode } from "react";

export interface KPI {
  title: string;
  value: number;
  change: number;
  positive: boolean;
  icon: ReactNode;
}