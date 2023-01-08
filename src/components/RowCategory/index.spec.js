import { RowCategory } from "./index";
import { render, screen, fireEvent, getByRole } from "@testing-library/react";

const categories = [
            {
                id: "1",
                name: "Salgados"
            },
            {
                id: "2",
                name: "Pizzas"
            },
            {
                id: "3",
                name: "Bebidas"
            },
            {
                id: "4",
                name: "Docês"
            }
]

describe("Row off Caterogies", ()=>{
    it("Should be able render all categories", ()=> {
      render(<RowCategory  categories={categories} />) ;

      expect(screen.getByText("Docês")).toBeInTheDocument();
    });
});