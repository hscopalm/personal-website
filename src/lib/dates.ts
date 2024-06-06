export function formatDateString(date: Date): string {
    const formattedDate = date.toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return formattedDate;
}
