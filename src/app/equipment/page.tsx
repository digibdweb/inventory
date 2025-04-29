// app/page.tsx
import { getConnection } from '@/app/lib/db';


export default async function Equipment() {
  const pool = await getConnection();
  const result = await pool.request().query('SELECT TOP 10 * FROM equipment');
  //const data = JSON.stringify(result.recordset, null, 2);
  const data = result.recordset;
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-700 shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">SL</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Name</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Category</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Barcode</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Location</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item) => (
            <tr key={item.sl} className="border-b border-gray-200 hover:bg-gray-200">
              <td className="px-4 py-2 text-gray-700">{item.sl}</td>
              <td className="px-4 py-2 text-gray-700">{item.name}</td>
              <td className="px-4 py-2 text-gray-700">{item.category}</td>
              <td className="px-4 py-2 text-gray-700">{item.barcode}</td>
              <td className="px-4 py-2 text-gray-700">{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
