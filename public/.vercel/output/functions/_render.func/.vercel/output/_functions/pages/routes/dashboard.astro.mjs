/* empty css                                     */
import { c as createComponent, r as renderTemplate, e as renderComponent, a as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_BNvYKVAo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Cllgrhz5.mjs';
import { c as checkUserRole } from '../../chunks/roleBasedRedirect_CiRNY80n.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import React, { useState, useEffect } from 'react';
import { getFirestore, getDocs, collection, doc, updateDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { $ as $$Pastilla } from '../../chunks/Pastilla_WAqMDmQa.mjs';
import { $ as $$Registro } from '../../chunks/Registro_DvAa4b-a.mjs';
export { renderers } from '../../renderers.mjs';

const firebaseConfig = {
  apiKey: "AIzaSyBMrPom6M9CbqwDEIVrgXo8rFUiykenFjc",
  authDomain: "colegio-enfermeria.firebaseapp.com",
  projectId: "colegio-enfermeria",
  storageBucket: "colegio-enfermeria.appspot.com",
  messagingSenderId: "611697437358",
  appId: "1:611697437358:web:8b6fabe08679c3453d5b3f"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
getStorage(app);

// src/components/js/modalLogic.js

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal?.classList.remove("opacity-0", "pointer-events-none");
    modal?.classList.add("opacity-100", "pointer-events-auto");
  }
  
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal?.classList.add("opacity-0", "pointer-events-none");
    modal?.classList.remove("opacity-100", "pointer-events-auto");
  }
  
  // Cerrar modal al hacer clic fuera del contenido del modal o al presionar 'Escape'
  function initializeModal(modalId) {
    const modal = document.getElementById(modalId);
  
    // Cerrar al hacer clic fuera del modal
    modal?.addEventListener('click', function (e) {
      // Verifica si el objetivo del clic es el fondo del modal (no su contenido)
      if (e.target === modal) {
        closeModal(modalId);
      }
    });
  
    // Cerrar al presionar la tecla 'Escape'
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeModal(modalId);
      }
    });
  }

const Input = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "input",
  {
    className: `px-3 py-2 bg-white border shadow-sm border-gray-100 placeholder-slate-400 focus:outline-none focus:border-gray-100 focus:ring-gray-200 block w-full rounded-3xl sm:text-sm focus:ring-1 ${className}`,
    ...props
  }
);
const InputFilter = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "input",
  {
    className: `px-3 py-2 bg-white border shadow-sm border-customGreen placeholder-slate-400 focus:outline-none focus:border-customGreen focus:ring-customGreen block w-full rounded-3xl sm:text-sm focus:ring-1 ${className}`,
    ...props
  }
);
const Button = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "button",
  {
    className: `px-4 py-2 font-semibold text-sm text-gray-600 underline ${className}`,
    ...props
  }
);
const ButtonPagination = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "button",
  {
    className: `px-6 py-2 font-semibold text-sm bg-customBlue text-white rounded-full shadow-sm ${className}`,
    ...props
  }
);
const ButtonPaginationNumber = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "button",
  {
    className: `flex items-center justify-center w-8 h-8 font-semibold text-sm bg-customBlue text-white rounded-full shadow-sm ${className}`,
    ...props
  }
);
const Table = ({ children }) => /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-lg shadow-custom", children: /* @__PURE__ */ jsx("table", { className: "min-w-full divide-y-[3px] divide-black/10 border-collapse separate", children }) });
const TableHeader = ({ children }) => /* @__PURE__ */ jsx("thead", { className: "bg-black/5", children });
const TableBody = ({ children }) => /* @__PURE__ */ jsx("tbody", { className: "bg-gray-50 divide-y-[3px] divide-black/10 line-clamp", children });
const TableRow = ({ children }) => /* @__PURE__ */ jsx("tr", { children });
const TableHead = ({ children }) => /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3 text-left text-sm font-base text-customBlack tracking-wider", children });
const TableCell = ({ children, colSpan }) => /* @__PURE__ */ jsx("td", { className: "px-6 py-2 whitespace-nowrap", colSpan, children });
const TableCellDescription = ({ children, colSpan, className }) => /* @__PURE__ */ jsx("td", { className: `whitespace-nowrap ${className}`, colSpan, children });
const ITEMS_PER_PAGE = 3;
const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [expandedRows, setExpandedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editedUser, setEditedUser] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const usersData = [];
        querySnapshot.forEach((doc2) => {
          const data = doc2.data();
          usersData.push({
            id: doc2.id,
            name: data.name || "",
            dni: data.dni || "",
            matricula: data.matricula || "",
            lugarDeOrigen: data.lugarDeOrigen || "",
            infoExtra: data.infoExtra || "",
            profileImageUrl: data.profileImageUrl || ""
            // Carga la URL de la imagen
          });
        });
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };
    fetchUsers();
  }, []);
  useEffect(() => {
    initializeModal("register-modal");
    return () => {
      document.removeEventListener("keydown", initializeModal);
    };
  }, []);
  const toggleRowExpansion = (userId) => {
    setExpandedRows(
      (prev) => prev.includes(userId) ? [] : [userId]
    );
  };
  const handleEditChange = (field, value) => {
    if (editedUser) {
      setEditedUser({ ...editedUser, [field]: value });
    }
  };
  const handleSaveChanges = async (userId) => {
    if (editedUser) {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        name: editedUser.name,
        dni: editedUser.dni,
        matricula: editedUser.matricula,
        lugarDeOrigen: editedUser.lugarDeOrigen,
        infoExtra: editedUser.infoExtra,
        profileImageUrl: editedUser.profileImageUrl
        // Actualiza la URL de la imagen
      });
      setUsers((prev) => prev.map((user) => user.id === userId ? { ...user, ...editedUser } : user));
      setExpandedRows((prev) => prev.filter((id) => id !== userId));
      setEditedUser(null);
    }
  };
  const filteredUsers = users.filter(
    (user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.dni.includes(searchTerm) || user.matricula.includes(searchTerm)
  );
  const pageCount = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-grid justify-between", children: [
      /* @__PURE__ */ jsx(
        InputFilter,
        {
          type: "text",
          placeholder: "Buscar por nombre, DNI o matrícula",
          value: searchTerm,
          onChange: (e) => setSearchTerm(e.target.value),
          className: "w-full max-w-sm border-customGreen rounded-3xl"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#",
          onClick: (e) => {
            e.preventDefault();
            openModal("register-modal");
          },
          className: "bg-customBlue text-white px-4 py-3 rounded-2xl text-sm font-semibold",
          children: "Agregar Miembro"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Table, { children: [
      /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableHead, { children: "Nombre" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Dni" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Matrícula" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Lugar de Origen" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Info Extra" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Edición" })
      ] }) }),
      /* @__PURE__ */ jsx(TableBody, { children: paginatedUsers.length > 0 ? paginatedUsers.map((user) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { children: user.name }),
          /* @__PURE__ */ jsx(TableCell, { children: user.dni }),
          /* @__PURE__ */ jsx(TableCell, { children: user.matricula }),
          /* @__PURE__ */ jsx(TableCell, { children: user.lugarDeOrigen }),
          /* @__PURE__ */ jsx(TableCell, { children: user.infoExtra }),
          /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(
            Button,
            {
              className: `transition-all duration-200 ${expandedRows.includes(user.id) ? "font-bold text-xl" : ""}`,
              onClick: () => {
                toggleRowExpansion(user.id);
                setEditedUser(user);
              },
              children: "Mas Detalle"
            }
          ) })
        ] }),
        expandedRows.includes(user.id) && /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCellDescription, { colSpan: 6, className: "p-0", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-100 p-10 m-0 rounded-none", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold mb-2", children: "Detalles adicionales" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: "Nombre",
              defaultValue: user.name,
              onChange: (e) => handleEditChange("name", e.target.value),
              className: "mb-2"
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: "DNI",
              defaultValue: user.dni,
              onChange: (e) => handleEditChange("dni", e.target.value),
              className: "mb-2"
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: "Matrícula",
              defaultValue: user.matricula,
              onChange: (e) => handleEditChange("matricula", e.target.value),
              className: "mb-2"
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: "Lugar de Origen",
              defaultValue: user.lugarDeOrigen,
              onChange: (e) => handleEditChange("lugarDeOrigen", e.target.value),
              className: "mb-2"
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: "Información Extra",
              defaultValue: user.infoExtra,
              onChange: (e) => handleEditChange("infoExtra", e.target.value),
              className: "mb-2"
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "file",
              accept: "image/*",
              onChange: (e) => {
                if (e.target.files) {
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    if (reader.result) {
                      handleEditChange("profileImageUrl", reader.result);
                    }
                  };
                  reader.readAsDataURL(file);
                }
              },
              className: "hidden"
            }
          ),
          /* @__PURE__ */ jsx(
            ButtonPagination,
            {
              onClick: () => {
                const fileInput = document.querySelector('input[type="file"]');
                fileInput.click();
              },
              className: "block mb-2 bg-customBlue p-1 text-white rounded-full",
              children: "Subir Imagen"
            }
          ),
          /* @__PURE__ */ jsx(
            ButtonPagination,
            {
              onClick: async () => {
                await handleSaveChanges(user.id);
                window.location.reload();
              },
              className: "bg-customGreen text-white",
              children: "Guardar Cambios"
            }
          )
        ] }) }) })
      ] }, user.id)) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 6, className: "text-center py-4", children: "No se encontraron usuarios." }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-4", children: [
      /* @__PURE__ */ jsx(
        ButtonPagination,
        {
          onClick: () => setCurrentPage((prev) => Math.max(prev - 1, 1)),
          className: "disabled:opacity-10",
          disabled: currentPage === 1,
          children: "Atrás"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex space-x-2", children: Array.from({ length: pageCount }, (_, index) => /* @__PURE__ */ jsx(
        ButtonPaginationNumber,
        {
          onClick: () => setCurrentPage(index + 1),
          className: `${currentPage === index + 1 ? "opacity-100" : "opacity-50"} bg-blue-200 transition-opacity duration-200`,
          children: index + 1
        },
        index + 1
      )) }),
      /* @__PURE__ */ jsx(
        ButtonPagination,
        {
          onClick: () => setCurrentPage((prev) => Math.min(prev + 1, pageCount)),
          className: "disabled:opacity-10",
          disabled: currentPage === pageCount,
          children: "Siguiente"
        }
      )
    ] })
  ] });
};

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const userData = await checkUserRole(Astro2, ["admin", "user", "guest"]);
  if (!userData) {
    return Astro2.redirect("/signin");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Perfil" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Pastilla", $$Pastilla, { "title": "Gestor de usuarios" })} ${maybeRenderHead()}<div class="max-w-6xl mx-auto p-4 md:p-8 mb-auto"> <!-- Sección condicional de permisos para admins --> ${userData.role === "admin" && renderTemplate`<div class="mb-6"> ${renderComponent($$result2, "UserTable", UserTable, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/components/jsx/userTable", "client:component-export": "default" })} ${renderComponent($$result2, "Registro", $$Registro, {})} </div>`} </div> ` })}`;
}, "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/pages/routes/dashboard.astro", void 0);

const $$file = "C:/Users/Keria/Documents/segundaOportunidad/public/public/src/pages/routes/dashboard.astro";
const $$url = "/routes/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Dashboard,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
