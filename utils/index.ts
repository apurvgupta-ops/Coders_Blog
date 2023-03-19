export const formatDate = (dateString: string): string => {
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  return date;
};

export const removeDash = (slug: string): string => {
  if (typeof slug === "string") {
    return slug.split("-").join(" ");
  }
  return "";
};

export const capitalFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
