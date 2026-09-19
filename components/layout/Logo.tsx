import { CodeXml } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-100">
        <CodeXml className="text-violet-700" size={22} />
      </div>
    </div>
  );
}
