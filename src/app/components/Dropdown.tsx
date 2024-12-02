import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
export interface DropdownOption {
  id: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value: DropdownOption;
  onChange: (option: DropdownOption) => void;
  label?: string;
  className?: string;
}

export function Dropdown({
  options,
  value,
  onChange,
  label,
  className,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-full flex items-center justify-between px-4 py-2.5 text-left',
          'bg-white border border-gray-300 rounded-lg shadow-sm',
          'hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary',
          'transition-colors duration-200',
          className
        )}
      >
        <span className="block truncate">{value.label}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-gray-400 transition-transform duration-200',
            isOpen && 'transform rotate-180'
          )}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <ul
            className={cn(
              'absolute z-20 w-full mt-1 py-1',
              'bg-white border border-gray-200 rounded-lg shadow-lg',
              'max-h-60 overflow-auto',
              'focus:outline-none'
            )}
          >
            {options.map((option) => (
              <li
                key={option.id}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={cn(
                  'px-4 py-2 text-sm cursor-pointer',
                  'hover:bg-gray-100 transition-colors duration-150',
                  option.id === value.id && 'bg-primary/10 text-primary'
                )}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}