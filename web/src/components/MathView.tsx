import React from 'react';
import katex from 'katex';

interface MathViewProps {
  math: string;
  block?: boolean;
  className?: string;
}

export const MathView: React.FC<MathViewProps> = ({ math, block = false, className = '' }) => {
  try {
    const html = katex.renderToString(math, {
      displayMode: block,
      throwOnError: false,
    });

    return (
      <span
        className={`katex-render ${block ? 'block text-center my-2 overflow-x-auto py-1' : 'inline'} ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } catch (error) {
    console.error('KaTeX rendering error:', error);
    return <code className="text-red-400 font-mono text-xs">{math}</code>;
  }
};
