import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function PermissionsDropdown({ permissions }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-3 bg-gray-100"
      >
        <span className="font-semibold">PERMISOS</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="p-3">
          {permissions.map((permission) => (
            <div key={permission.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={permission.id}
                checked={permission.checked}
                className="mr-2"
              />
              <label htmlFor={permission.id}>{permission.label}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}