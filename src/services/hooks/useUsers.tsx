import { useQuery } from "react-query";
import { api } from "../api";

export function useUsers() {
  return useQuery(
    ["users"],
    async () => {
      const { data } = await api.get("users");
      const users = data.users.map((user) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email.email,
          created_at: new Date(user.created_at.registered_at).toLocaleDateString(
            "pt-BR",
            {
              day: "numeric",
              month: "short",
              year: "numeric",
            }
          ),
        };
      });

      return users;
    },
    { staleTime: 1000 * 5 }
  );
}
