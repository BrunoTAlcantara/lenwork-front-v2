import { ElementType } from "react";
import { LoadingSpinner } from "../ui/Spinner";

interface IndicatorsProps {
  icon: ElementType;
  title: string;
  indicator: number;
  loading: boolean;
}

export function Indicators({
  title,
  indicator,
  icon: Icon,
  loading,
}: IndicatorsProps) {
  return (
    <div className="flex  md:flex-row w-full justify-start items-center border p-4 md:p-6 rounded-lg">
      <div className="rounded-sm h-16 w-16 md:h-20 md:w-20 flex items-center justify-center bg-[#40c8f4] bg-opacity-15 text-white mr-4">
        <Icon color="#40c8f4" size={35} />
      </div>
      <div className="mt-4 md:mt-0">
        <span className="text-xs tex al md:text-sm">{title}</span>
        {loading ? (
          <LoadingSpinner className="text-primary  h-8 w-8" />
        ) : (
          <div className="text-2xl md:text-4xl font-bold">{indicator}</div>
        )}
      </div>
    </div>
  );
}
