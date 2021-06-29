export default function Stat({ title, value }) {
  return (
    <li className="space-y-2">
      <h3 className="text-2xl font-heading text-gray-600">{title}</h3>
      <p className="text-6xl font-base">{value}</p>
    </li>
  );
}
