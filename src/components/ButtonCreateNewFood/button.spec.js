import { BtnCreateNewFood } from "./index";
import { render, screen, fireEvent } from "@testing-library/react";


describe("Button", ()=>{
    it("Should be able render Button component", ()=> {
      render(<BtnCreateNewFood handleSubmitFoods={handleSubmitFoods}/>) ;

      expect(screen.getByText("Enviar")).toBeInTheDocument();
    });

    it("Should be able call handleSubmitFoods when the button is clicked", async ()=> {
      render(<BtnCreateNewFood/>);

      const button = screen.getByRole("button");

      console.log('button :>> ', button);
      fireEvent.click(button)

      

      expect().toReturn()
    });
});