import { Product } from "../types/contexts/products_context_type";

export const formatPrice = (number: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};

export const getUniqueValues = (data: Product[], property: string) => {
  let unique = data.map((item) => item[property]);

  if (property === "colors") {
    unique = unique.flat();
  }

  return <string[]>["all", ...new Set(unique)];
};
