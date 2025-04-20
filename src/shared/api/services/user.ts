import { AxiosResponse } from "axios";
import { User } from "../model/user";
import { api } from "../http";

export class UserService {
  static async getUsers(
    filterValue: string | null
  ): Promise<AxiosResponse<User[]>> {
    const params: Record<string, string> = {};

    if (filterValue && filterValue.trim() !== "") {
      params.name_like = filterValue;
    }

    return api.get<User[]>("/users", { params });
  }
}
