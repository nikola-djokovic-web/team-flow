import { Link } from "react-router";
import Button from "@mui/material/Button";

export function PageNotFound() {
  return (
    <div className="min-h-dvh bg-[#F8F7F4] text-[#24232B] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <div className="mt-4">
        <Link to="/" className="text-[#6553C7] hover:underline">
         <Button>
            Go back to Dashboard
         </Button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
