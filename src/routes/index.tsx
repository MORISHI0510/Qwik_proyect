import { component$, $, useStore } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import ImgMon from '../assets/Mon.jpg?jsx';
import ImgLogo from '../assets/Logo.png?jsx';
import '../components/css/styles.css';

export default component$(() => {
  const navigate = useNavigate();
  const state = useStore({
    email: '',
    password: ''
  });

  // Función de validación y redirección
  const handleLogin = $((event: MouseEvent) => {
    event.preventDefault();  // Previene el comportamiento por defecto del botón

    // Validación básica de campos vacíos
    if (state.email === '' || state.password === '') {
      alert('Por favor, completa todos los campos');
      return;
    }
  
    // Redirección al dashboard si la validación es exitosa
    navigate('/dash/', { replaceState: true }); // 'replaceState: true' para evitar volver a esta página
  });

  return (
    <>
      <div class="min-h-screen grid grid-cols-1 md:grid-cols-[2fr_1fr] h-screen overflow-hidden">
        <div class="hidden md:flex items-center justify-center custom-left-column h-full">
          <div class="w-full h-full flex justify-center items-start">
            <ImgLogo class="max-h-[90%] max-w-[90%] object-contain mt-0" />
          </div>
        </div>
        <div class="flex items-center justify-center h-full">
          <form class="max-w-sm w-full mt-5 md:mt-0">
            <div class="flex justify-center mb-5">
              <h1 class="text-3xl text-black">Inicio de Sesión</h1>
            </div>
            <div class="mb-5">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Usuario
              </label>
              <div class="flex">
                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                  </svg>
                </span>
                <input
                  type="email"
                  id="email"
                  class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nombre@flowbite.com"
                  value={state.email}
                  onInput$={(e) => state.email = (e.target as HTMLInputElement).value}
                  required
                />
              </div>
            </div>

            <div class="mb-5">
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Contraseña
              </label>
              <div class="flex">
                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
                  </svg>
                </span>
                <input
                  type="password"
                  id="password"
                  class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ingrese su Contraseña"
                  value={state.password}
                  onInput$={(e) => state.password = (e.target as HTMLInputElement).value}
                  required
                />
              </div>
            </div>

            <button
              type="button"
              onClick$={handleLogin}
              class="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-8" 
            >
              Ingresar
            </button>

            <div class="flex justify-center mt-5">
              <ImgMon />
            </div>
          </form>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};