import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";

describe("Filter component", () => {
  it("calls onSearchChange with the correct value", () => {
    const handleSearchChange = jest.fn();

    render(
      <Filter
        selectedCategory="All"
        onCategoryChange={() => {}}
        searchText=""
        onSearchChange={handleSearchChange}
      />
    );

    const searchInput = screen.getByPlaceholderText(/Search/);

    fireEvent.change(searchInput, { target: { value: "Cheese" } });

    expect(handleSearchChange).toHaveBeenCalledWith("Cheese");
  });
});
