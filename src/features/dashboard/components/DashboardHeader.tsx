import { Avatar, IconButton } from "@mui/material"
import { GridViewRounded, NotificationsNoneRounded, SearchRounded } from "@mui/icons-material";
import { Link } from "react-router";

export function DashboardHeader() {
    return (
        <header className="border-b border-[#EAE8E3] bg-[#FCFBF9]">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-10">
            <a href="#" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#28252F] text-white">
                <GridViewRounded sx={{ fontSize: 17 }} />
              </div>
              <span className="text-[19px] font-bold tracking-[-0.07em]">
                teamflow<span className="text-[#806DE0]">.</span>
              </span>
            </a>

            <nav className="hidden items-center gap-7 md:flex">
            <Link className="text-sm text-[#898692] transition hover:text-[#28252F]" to="/">
                Dashboard
              </Link>
              <a className="text-sm text-[#898692] transition hover:text-[#28252F]" href="#">
                Calendar
              </a>
              <a className="text-sm text-[#898692] transition hover:text-[#28252F]" href="#">
                Reports
              </a>

              <a className="text-sm text-[#898692] transition hover:text-[#28252F]" href="#">
                Projects
              </a>
              <a className="text-sm text-[#898692] transition hover:text-[#28252F]" href="#">
                My tasks
              </a>
              <a className="text-sm text-[#898692] transition hover:text-[#28252F]" href="#">
                Team
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              aria-label="Search"
              className="hidden h-9 items-center gap-2 rounded-lg border border-[#EAE8E3] bg-white px-3 text-sm text-[#9995A0] sm:flex"
            >
              <SearchRounded sx={{ fontSize: 17 }} />
              <span>Search</span>
              <span className="ml-5 rounded border border-[#EAE8E3] px-1.5 py-0.5 text-[10px]">
                ⌘ K
              </span>
            </button>

            <IconButton aria-label="Notifications" size="small">
              <NotificationsNoneRounded sx={{ color: "#777382" }} />
            </IconButton>

            <div className="ml-1 flex items-center gap-2.5 border-l border-[#EAE8E3] pl-3">
              <Avatar
                sx={{
                  width: 34,
                  height: 34,
                  bgcolor: "#E7E1F8",
                  color: "#5C4BAA",
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                ND
              </Avatar>
              <div className="hidden sm:block">
                <p className="text-xs font-semibold">Nikola Djokovic</p>
                <p className="mt-0.5 text-[11px] text-[#9995A0]">
                  Workspace admin
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}