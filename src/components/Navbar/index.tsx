import { component$, useSignal } from "@builder.io/qwik";

export const Navbar = component$(() => {
  const isDropdownOpen = useSignal(false);

  return (
    <nav class="bg-white shadow-lg w-full">
      <div class="w-full max-w-full px-4"> {/* Aseguramos que ocupe el ancho completo */}
        <div class="flex justify-between items-center w-full">
          {/* Logo section */}
          <div class="flex space-x-4">
            <a href="#" class="text-xl font-bold py-5">Logo</a>
          </div>

          {/* Avatar and Dropdown */}
          <div class="flex-grow flex justify-end items-center"> {/* flex-grow para que tome todo el espacio disponible */}
            <div class="relative">
              <button
                class="flex items-center space-x-2 focus:outline-none"
                onClick$={() => (isDropdownOpen.value = !isDropdownOpen.value)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              {isDropdownOpen.value && (
                <div class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Perfil
                  </a>
                  <a href="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Cerrar sesión
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
});