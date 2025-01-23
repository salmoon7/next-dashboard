import { lusitana } from "@/app/ui/font";

export default function Page() {
  return (
    <>
      <p className={`${lusitana.className}  bg-blue-700 mb-12`}>
        Is this really a Dashboard Page ??
      </p>
      <p className="bg-red-950 text-white">
        Is this really a Dashboard Page ??
      </p>
    </>
  );
}
