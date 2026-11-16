
import { Button, Container, Typography } from "@mui/material";

export default function App() {
  return (
    <Container maxWidth="lg" className="py-12">
      <div className="flex flex-col gap-4">
        <Typography variant="h3" component="h1">
          Welcome to TeamFlow
        </Typography>

        <Typography color="text.secondary">
          Your workspace for managing teams, projects and tasks.
        </Typography>

        <div>
          <Button variant="contained">
            Get started
          </Button>
        </div>
      </div>
    </Container>
  );
}
