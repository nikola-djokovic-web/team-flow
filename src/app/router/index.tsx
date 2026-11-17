import { createBrowserRouter } from "react-router";
import { AppLayout } from "@/components/layout/AppLayout";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import ProjectDetailsPage from "@/features/projects/pages/ProjectDetailsPage";
import { PageNotFound } from "@/features/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "projects/:projectId",
        element: <ProjectDetailsPage />,
      },
      
    ],
    errorElement: <PageNotFound />,
  },
]);