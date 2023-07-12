import UseStatePage from "./UseState";
import { fireEvent, render, screen } from "@testing-library/react";

describe("testing useState Page", () => {
  it("should render", async () => {
    //ARRANGE -> setup the basic component you need
    render(<UseStatePage />);

    //ACT -> action you need to test
    const divElement = screen.getByTestId("container");
    const minusBtn = screen.getByTestId("minus-btn");
    const plusBtn = screen.getByTestId("plus-btn");
    const labelValue = screen.getByTestId("label-value");

    //ASSERT -> expect result from the component response
    expect(divElement.textContent).toBeDefined();
    expect(minusBtn).toBeDefined();
    expect(plusBtn).toBeDefined();
    expect(labelValue).toBeDefined();
    expect(labelValue.textContent).toBe("0");
  });

  it("should return 1 when click the plus button", () => {
    render(<UseStatePage />);
    fireEvent.click(screen.getByTestId("plus-btn"));

    const divElement = screen.getByTestId("container");
    const minusBtn = screen.getByTestId("minus-btn");
    const plusBtn = screen.getByTestId("plus-btn");
    const labelValue = screen.getByTestId("label-value");

    expect(divElement.textContent).toBeDefined();
    expect(minusBtn).toBeDefined();
    expect(plusBtn).toBeDefined();
    expect(labelValue).toBeDefined();
    expect(labelValue.textContent).toBe("1");
  });

  it("should return -1 when click the minus button", () => {
    render(<UseStatePage />);
    fireEvent.click(screen.getByTestId("minus-btn"));

    const divElement = screen.getByTestId("container");
    const minusBtn = screen.getByTestId("minus-btn");
    const plusBtn = screen.getByTestId("plus-btn");
    const labelValue = screen.getByTestId("label-value");

    expect(divElement.textContent).toBeDefined();
    expect(minusBtn).toBeDefined();
    expect(plusBtn).toBeDefined();
    expect(labelValue).toBeDefined();
    expect(labelValue.textContent).toBe("-1");
  });
});
