import Image from "next/image";
import ExampleTable from "./Table";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ExampleTable />
    </main>
  );
}
