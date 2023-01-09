import { useContext } from "react";
import { DashContext } from "../../contexts/DashboardContext/DashContext";

export function Description() {
  const {} = useContext(DashContext);

  return (
    <>
      <header></header>
      <main>
        <ul></ul>
        <ul></ul>
      </main>
    </>
  );
}
