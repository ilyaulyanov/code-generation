import * as React from "react";

import { render, waitFor, screen } from "@testing-library/react";

import { PetsList } from "../PetsList";

describe("Pets test", () => {
  it("should render", async () => {
    render(<PetsList />);

    await waitFor(() => screen.getByText(/List of pets/i))
  });
});
