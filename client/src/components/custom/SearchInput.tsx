"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function SearchInput({ className }: { className?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Initialize state with the search term from URL query
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') ?? '');

  // Debounce function
  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Update URL params with debounce
  const updateUrlParams = debounce((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('search', term);
    router.push(`?${params.toString()}`);
  }, 300); // 300ms delay

  return (
    <div className={cn("flex items-center gap-2 grid-cols-2", className)}>
      <div className="relative w-full">
        <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
          <SearchIcon />
        </span>
        <Input
          placeholder="Search"
          className="w-full h-10 border border-gray-300 rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => {
            const term = e.target.value;
            setSearchTerm(term);
            updateUrlParams(term);
          }}
        />
      </div>
    </div>
  );
}
