import { BtnCreateNewFood } from "./index";
import { render, screen, fireEvent} from "@testing-library/react";

const handleSubmitFoods = jest.fn();

describe("Button create new food", ()=>{
    it("Should be able render Button component", ()=> {
      render(<BtnCreateNewFood />) ;

      expect(screen.getByText("Enviar")).toBeInTheDocument();
    });

    it("Should be able create new food", async ()=> {
      render(<BtnCreateNewFood handleSubmitFoods={handleSubmitFoods} />) ;
      
      const button = screen.getByRole("button")
      
      await fireEvent.click(button)
      expect(handleSubmitFoods).toHaveBeenCalledTimes(1);
    });

  
});