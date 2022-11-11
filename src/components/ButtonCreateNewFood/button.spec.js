import { BtnCreateNewFood } from "./index";
import { render, screen } from "@testing-library/react";

describe("Button", ()=>{
    it("should be able render Button component", ()=> {
      render(<BtnCreateNewFood />) 

      expect(screen.getByText("Enviar")).toBeInTheDocument();
    })
})