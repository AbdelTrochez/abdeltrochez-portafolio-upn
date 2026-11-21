const InformationSummary = ({ item }) => {
  return (
    <div className="bg-slate-100/90 text-center rounded-xl border border-slate-200">
      <div className="w-auto h-auto mx-2 sm:mx-4 my-4 sm:my-4">
        <p className="text-[16px] xxs:text-[18px] sm:text-[26px] font-bold text-picto-primary">
          {item.description}
        </p>
        <p className="text-[10px] xxs:text-[11px] sm:text-[14px] font-semibold px-2 text-gray-700">
          {item.title}
        </p>
        {item.subtitle && (
          <p className="text-[9px] sm:text-[11px] text-gray-500 px-1 mt-0.5">
            {item.subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default InformationSummary;
