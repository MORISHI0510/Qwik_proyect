import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
export default component$(() => {
  return (
    <>
      <h1>hola mundo</h1>  
    </>
  );
});

export const head: DocumentHead = {
  title: "Intitución",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
