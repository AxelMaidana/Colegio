import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

function PermissionsDropdown({ permissions }) {
  const [isOpen, setIsOpen] = useState(false);
  const [permissionsState, setPermissions] = useState(permissions);
  const handleCheckboxChange = (id) => {
    setPermissions(
      (prevPermissions) => prevPermissions.map(
        (permission) => permission.id === id ? { ...permission, checked: !permission.checked } : permission
      )
    );
  };
  return /* @__PURE__ */ jsxs("div", { className: "border border-gray-300 rounded-xl shadow-md bg-gray-50 px-4 py-2", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "w-full flex justify-between items-center p-1 bg-gray-50 rounded-md text-gray-700 font-bold",
        children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-xl", children: "PERMISOS" }),
          isOpen ? /* @__PURE__ */ jsx(ChevronUp, { size: 20 }) : /* @__PURE__ */ jsx(ChevronDown, { size: 20 })
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsx("div", { className: "pt-2", children: permissionsState.map((permission) => /* @__PURE__ */ jsxs("div", { className: "flex items-center bg-gray-100 p-3 rounded-3xl mb-3 shadow-sm", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "checkbox",
          id: permission.id,
          checked: permission.checked,
          onChange: () => handleCheckboxChange(permission.id),
          className: "mr-2 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        }
      ),
      /* @__PURE__ */ jsx("label", { htmlFor: permission.id, className: "text-gray-700 font-semibold", children: permission.label })
    ] }, permission.id)) })
  ] });
}

function CoursesDropdown({ courses }) {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "border border-gray-300 rounded-xl shadow-md bg-gray-50 px-4 py-2", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "w-full flex justify-between items-center p-1 bg-gray-50 rounded-md text-gray-700 font-bold",
        children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-xl", children: "Mis Cursos" }),
          isOpen ? /* @__PURE__ */ jsx(ChevronUp, { size: 20 }) : /* @__PURE__ */ jsx(ChevronDown, { size: 20 })
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsxs("div", { className: "", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-gray-500 mb-4", children: "¡Recuerda solicitar tus certificados en su respectivo curso para que estén aquí!" }),
      courses.map((course) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex justify-between items-center bg-gray-100 p-3 rounded-3xl mb-3 shadow-sm",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx("div", { className: "px-2", children: /* @__PURE__ */ jsx("svg", { className: "opacity-50", "data-testid": "geist-icon", height: "16", "stroke-linejoin": "round", viewBox: "0 0 16 16", width: "16", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M3.75 0C2.50736 0 1.5 1.00736 1.5 2.25V13.744V13.75H1.50001C1.50323 14.9899 2.50935 15.994 3.75 15.994H13H14.5V14.494V13.7296V12.994V11.494V0.75V0H13.75H3.75ZM13 11.494V1.5H3.75C3.33579 1.5 3 1.83579 3 2.25V11.622C3.23458 11.5391 3.48702 11.494 3.75 11.494H13ZM3 13.744C3 14.1582 3.33579 14.494 3.75 14.494H13V13.7296V12.994H3.75C3.33579 12.994 3 13.3298 3 13.744Z", fill: "currentColor" }) }) }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700 font-semibold", children: course.name })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-56", children: [
              /* @__PURE__ */ jsx("button", { className: "text-customBlack opacity-70 text-sm font-semibold underline", children: "Descargar Certificado" }),
              /* @__PURE__ */ jsx("button", { className: "bg-customBlue text-white px-4 py-1 rounded-full hover:scale-105 transition-all duration-300 ease-in-out", children: "Ir al Curso" })
            ] })
          ]
        },
        course.id
      ))
    ] })
  ] });
}

export { CoursesDropdown as C, PermissionsDropdown as P };
