import type { Project } from "@/features/projects/types";
import { Link } from "react-router";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <Link to={`/projects/${project.id}`} className="text-lg font-semibold text-[#6553C7] hover:underline">
        {project.name}
      </Link>
      <p className="text-gray-600">{project.description}</p>
      <div className="mt-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Progress</span>
          <span>{project.progress}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-[#6553C7] rounded-full"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}