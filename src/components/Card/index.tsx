import { component$ } from "@builder.io/qwik";

interface CardProps {
  title: string;
  description: string;
  links: string[];
}

export const Card = component$(({ title, description, links }: CardProps) => {
  return (
    <div class="bg-gray-900 text-white rounded-lg shadow-lg p-6 max-w-sm mx-auto mb-4">
      <h3 class="text-xl font-bold mb-2">{title}</h3>
      <p class="text-gray-400 mb-4">{description}</p>
      <div class="flex space-x-4">
        {links.map((link, index) => (
          <a href="#" class="text-orange-500 hover:text-orange-700" key={index}>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
});