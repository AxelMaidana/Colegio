import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function CoursesDropdown({ courses }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-3 bg-gray-100"
      >
        <span className="font-semibold">Cursos</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="p-3">
          {courses.map((course) => (
            <div key={course.id} className="flex justify-between items-center mb-2">
              <span>{course.name}</span>
              <button className="text-blue-500 hover:underline">{course.action}</button>
            </div>
          ))}
          <button className="mt-2 text-blue-500 hover:underline">+ Agregar</button>
        </div>
      )}
    </div>
  );
}