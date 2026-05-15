'use client';

import { Button } from "@/components/ui/button";

export function ProblemFilters() {
  return (
    <div className="bg-surface border-2 border-on-surface p-6 mb-8 neo-shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-space-grotesk font-black mb-2 uppercase">
            Search Problems
          </label>
          <input
            className="w-full border-2 border-on-surface p-3 font-space-grotesk font-bold uppercase"
            placeholder="FILTER BY TITLE OR KEYWORD..."
            type="text"
          />
        </div>
        <div>
          <label className="block text-xs font-space-grotesk font-black mb-2 uppercase">
            Difficulty
          </label>
          <select className="w-full border-2 border-on-surface p-3 font-space-grotesk font-bold uppercase bg-surface">
            <option>ALL LEVELS</option>
            <option>EASY</option>
            <option>MEDIUM</option>
            <option>HARD</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        <Button className="bg-primary text-on-primary font-space-grotesk font-black text-xs uppercase px-4 py-2">
          ALL TOPICS
        </Button>
        <Button className="bg-surface border-2 border-on-surface font-space-grotesk font-black text-xs uppercase px-4 py-2 hover:bg-primary-container">
          ARRAYS
        </Button>
        <Button className="bg-surface border-2 border-on-surface font-space-grotesk font-black text-xs uppercase px-4 py-2 hover:bg-primary-container">
          DYNAMIC PROG
        </Button>
        <Button className="bg-surface border-2 border-on-surface font-space-grotesk font-black text-xs uppercase px-4 py-2 hover:bg-primary-container">
          GRAPH THEORY
        </Button>
        <Button className="bg-surface border-2 border-on-surface font-space-grotesk font-black text-xs uppercase px-4 py-2 hover:bg-primary-container">
          STRINGS
        </Button>
      </div>
    </div>
  );
}