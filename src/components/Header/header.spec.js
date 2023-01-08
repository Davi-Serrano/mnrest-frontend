import { Header } from "./index";
import { render, screen, fireEvent, getByRole } from "@testing-library/react";

describe("Header", ()=>{
    it("Should be able render Header component", ()=> {
      render(<Header />) ;

      expect(screen.getByText("Restaurante")).toBeInTheDocument();
    });
});