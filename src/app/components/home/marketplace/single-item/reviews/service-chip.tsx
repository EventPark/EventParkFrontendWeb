interface ServiceChipProps {
  serviceName: string;
}

export default function ServiceChip({ serviceName }: ServiceChipProps) {
  return (
    <div
      data-color="Blue"
      data-icon="Dot"
      data-size="lg"
      className="mix-blend-multiply inline-flex justify-start items-start"
    >
      <div
        data-icon="Dot"
        className="pl-2.5 pr-3 py-1.5 bg-sky-50 rounded-2xl flex justify-center items-center gap-1.5"
      >
        <div data-size="sm" className="w-2 h-2 relative overflow-hidden">
          <div className="w-1.5 h-1.5 left-[1px] top-[1px] absolute bg-blue rounded-full" />
        </div>
        <div className="text-center justify-start text-blue-dark text-sm font-medium font-['Rethink_Sans'] leading-tight">
          {serviceName}
        </div>
      </div>
    </div>
  );
}
