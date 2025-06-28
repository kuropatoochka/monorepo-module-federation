import { About } from "./About";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("TEST ABOUT", () => {
  test('render About page', () => {
    render(<About/>);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value/i);

    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  })

  test("render About page 2", async () => {
    render(<About/>);
    // const helloElem = screen.queryByText(/hello/i);
    // expect(helloElem).toBeNull();

    screen.debug()
    const helloElem = await screen.findByText(/data/i);
    expect(helloElem).toBeInTheDocument();
    screen.debug()
  })

  test("click event", () => {
    render(<About/>);
    const btn = screen.getByTestId('toggle-btn');

    expect(screen.queryByTestId('toggle-elem')).toBeNull()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
  })

  test("input event", () => {
    render(<About/>);
    const input = screen.getByPlaceholderText(/input value/i);

    expect(screen.queryByTestId('input-value')).toContainHTML('')
    // fireEvent.input(input, {
    //   target: {value: '123'}
    // })
    userEvent.type(input, '123')
    expect(screen.queryByTestId('input-value')).toContainHTML('123')
  })
})
