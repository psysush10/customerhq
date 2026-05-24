import { Health } from "@/app/types/account"

export function getHealthBadgeColor(
  status: Health
) {
  switch (status) {
    case "Healthy":
      return "bg-green-100 text-green-700";

    case "At Risk":
      return "bg-yellow-100 text-yellow-700";

    case "Critical":
      return "bg-red-100 text-red-700";

    default:
      return "";
  }
}