import React from "react";

type Props = {
  tags: {
    label: string;
    className?: string;
  }[];
};

const Tags = ({ tags }: Props) => {
  return (
    <div className="absolute bottom-8 left-2 flex gap-2 flex-wrap transition-all duration-300 group-hover:bottom-20">
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`px-4 py-1.5 rounded-full text-sm font-medium bg-white/25 backdrop-blur-sm text-white ${tag.className}`}
        >
          {tag.label}
        </span>
      ))}
    </div>
  );
};

export default Tags;
