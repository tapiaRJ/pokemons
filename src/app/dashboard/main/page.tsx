import { SimpleWidget, WidgetsGrid } from "@/components";

//mr => para metadata

export const metadata = {
  title: 'Dashboard main',
  description: 'SEO Title',
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className=" text-xl">imformacion general</span>

      <WidgetsGrid/>
       
    </div>
  );
}