import { BtnCreateNewFood } from "./index";
import { render, screen, fireEvent } from "@testing-library/react";


describe("Button", ()=>{
    it("Should be able render Button component", ()=> {
      render(<BtnCreateNewFood handleSubmitFoods={handleSubmitFoods}/>) ;

      expect(screen.getByText("Enviar")).toBeInTheDocument();
    });

  
});