
import React from 'react';
import { Language } from '../types';

interface Props {
  current: Language;
  onSet: (lang: Language) => void;
}

export const LanguageSwitcher: React.FC<Props> = ({ current, onSet }) => {
  const langs: Language[] = ['EN', 'FR', 'ES'];
  return (
    <div className="flex gap-2 text-xs font-semibold">
      {langs.map(l => (
        <button
          key={l}
          onClick={() => onSet(l)}
          className={`px-2 py-1 transition-all duration-300 ${
            current === l ? 'bg-stone-800 text-white rounded' : 'text-stone-500 hover:text-stone-800'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
};
