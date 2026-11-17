import { useParams } from "react-router";
import  projectData  from "@/features/projects/ProjectData";

export default function ProjectDetailsPage() {
  const { projectId } = useParams();
  const projectIdNumber = projectId ? Number(projectId) : null;
  const project = projectData.find((p) => p.id === projectIdNumber);

  return (
  
      <main className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-12">
       
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-[#6553C7] mb-4">
            Project Details
          </h2>
          <p className="text-gray-600">
            Details for project - {project ? project.name : "Project not found."}
          </p>
          <p>
            {project ? project.description : "Project not found."}
          </p>
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Progress</span>
              <span>{project ? `${project.progress}%` : "N/A"}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-[#6553C7] rounded-full"
                style={{ width: project ? `${project.progress}%` : "0%" }}
              ></div>
            </div>
          </div>
        </div>
      </main>

  );
}
 