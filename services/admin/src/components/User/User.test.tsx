import User from "./User";
import { render, screen } from "@testing-library/react";
import axios from "axios";

jest.mock('axios')

describe("USER TEST", () => {
  let response: any;
  beforeEach(() => {
    response = {
      data: [
        {
          "id": 1,
          "name": "Leanne Graham",
        },
        {
          "id": 2,
          "name": "Ervin Howell",
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
        }
      ]
    }
  })

  test("load user data", async () => {
    // @ts-ignore
    axios.get.mockReturnValue(response);
    render(<User/>)
    // @ts-ignore
    const users = await screen.findAllByTestId('user-item')
    expect(users.length).toBe(3)
    expect(axios.get).toHaveBeenCalledTimes(1)
    screen.debug()
  })
})