import React from "react";
import { MoreHorizontal, CheckSquare, Square } from "lucide-react";

const tasks = [
  { id: 1, text: "Make a Copy Project of Manajemen Internal Workflow", completed: true },
  { id: 2, text: "Checking Project and adding New Project", completed: false },
  { id: 3, text: "Checking Project and adding New Project", completed: false },
  { id: 4, text: "Checking Progress New Project", completed: false },
];

export const TaskSection = () => {
  return (
    <div className="bg-brand-components text-white rounded-4xl p-8 shadow-xl relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>

      <div className="flex justify-between items-start mb-6 relative z-10">
        <div>
            <h3 className="text-2xl font-bold">My Task</h3>
            <div className="flex items-center gap-2 mt-2">
                <span className="bg-brand-support/30 text-brand-secondary text-xs px-2 py-1 rounded-md font-medium">Today</span>
                <span className="text-sm text-gray-300">12 Januari 2026</span>
            </div>
        </div>
        <button className="text-gray-400 hover:text-white"><MoreHorizontal /></button>
      </div>

      <div className="space-y-4 relative z-10">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-start gap-3 group cursor-pointer">
            <div className="mt-1 text-brand-primary">
                {task.completed ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5 opacity-50 group-hover:opacity-100" />}
            </div>
            <p className={`text-sm leading-relaxed ${task.completed ? 'line-through text-gray-500' : 'text-gray-100'}`}>
              {task.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
