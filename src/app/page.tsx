// app/page.tsx
import { getConnection } from '@/app/lib/db';

export default async function HomePage() {
  const pool = await getConnection();
  const result = await pool.request().query('SELECT TOP 10 * FROM equipment');

  return (
    <div>
    
      <div className = "grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* {<Card title="Collected" value={totalCollected} type="collected" />} */}
        {/* <Card title="Pending" value={totalPending} type="pending" /> */}
        {/* <Card title="Total Invoices" value={totalVendorhas} type="invoices" /> */}
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue}  /> */}
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </div>
  );
}
