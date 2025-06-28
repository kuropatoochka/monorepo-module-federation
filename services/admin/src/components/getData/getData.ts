import axios from "axios"
import { mapArrToString } from "../mapArrToString/mapArrToString"

export const getData = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    // @ts-ignore
    const userIds = response.data.map(user => user.id)
    return mapArrToString(userIds)
  } catch (e) {

  }
}