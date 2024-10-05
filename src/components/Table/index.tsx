import { component$ } from "@builder.io/qwik";

interface TableRowProps {
  name: string;
  itemName: string;
  price: string;
}

export const TableRow = component$(({ name, itemName, price }: TableRowProps) => {
  return (
    <tr class="bg-gray-800 text-white">
      <td class="px-4 py-2">{name}</td>
      <td class="px-4 py-2">{itemName}</td>
      <td class="px-4 py-2 text-right">{price}</td>
    </tr>
  );
});

export const Table = component$(() => {
  const data = [
    { name: "Alvin", itemName: "Eclair", price: "$0.87" },
    { name: "Alan", itemName: "Jellybean", price: "$3.76" },
  ];

  return (
    <div class="overflow-x-auto">
      <table class="min-w-full table-auto bg-gray-900 text-white">
        <thead>
          <tr class="text-left">
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Item Name</th>
            <th class="px-4 py-2 text-right">Item Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              name={row.name}
              itemName={row.itemName}
              price={row.price}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
});