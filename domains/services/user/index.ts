import axiosInstance from "@/configs/axios.config";
import { UserParams, UserResponse } from "@/domains/models/user";

export const userService = {
  get: {
    list: async (params?: UserParams): Promise<UserResponse[]> => {
      const response = await axiosInstance
        .get("/users", { params })
        .then((res) => res.data)
        .catch((err) => {
          throw new Error(err);
        });

      return response;
    },
  },
  getAllAccount: async (): Promise<UserResponse[]> => {
    const response = await axiosInstance
      .get("/accounts")
      .then((res) => res.data.data)
      .catch((err) => {
        throw new Error(err);
      });

    return response;
  },
  create: {},
  update: {},
  delete: {},
  patch: {},
};
