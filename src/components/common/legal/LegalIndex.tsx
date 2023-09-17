import React from 'react';

interface LegalsProps {
  legals: string;
}

const LegalsSection: React.FC<LegalsProps> = ({ legals }) => {
  return (
    <section className="bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200 -mx-8">
      <div className="max-w-screen-lg mx-auto px-8 text-center">
        {legals}
      </div>
    </section>
  );
};

export default LegalsSection;
