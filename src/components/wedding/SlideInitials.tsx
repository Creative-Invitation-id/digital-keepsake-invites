import React from "react";

interface SlideInitialsProps {
  showContent: boolean;
}

export const SlideInitials: React.FC<SlideInitialsProps> = ({ showContent }) => {
  if (!showContent) return null;

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 pt-6">
      <div className="text-center">

        {/* The Wedding Of (POSISI TETAP) */}
        <p className="font-vremya text-sm text-primary/60 mt-3 tracking-widest uppercase opacity-0 animate-fade-in-up mb-10">
          The Wedding Of
        </p>

        {/* Initials — dinaikkan sedikit */}
        <div className="flex flex-col items-center gap-0 overflow-visible -mt-6">
          <span className="font-anatomical text-8xl text-primary opacity-0 animate-fade-in-scale leading-none inline-block">
            A
          </span>

          <span className="font-vremya text-xl text-primary/70 opacity-0 animate-fade-in -my-2 inline-block animation-delay-300">
            &
          </span>

          <span className="font-anatomical text-8xl text-primary opacity-0 animate-fade-in-scale leading-none inline-block animation-delay-600">
            A
          </span>
        </div>

        {/* Decorative line */}
        <div className=" opacity-0 animate-fade-in animation-delay-900">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto" />
        </div>
      </div>
    </div>
  );
};
