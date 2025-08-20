export function getExcerptFromEditorJs(content) {
  try {
    const blocks = typeof content === "string" ? JSON.parse(content) : content;
    if (!blocks.blocks) return "";

    return (
      blocks.blocks
        .filter((block) => block.type === "paragraph")
        .map((block) => block.data.text)
        .join(" ")
        .substring(0, 100) + "..."
    );
  } catch {
    return "";
  }
}
