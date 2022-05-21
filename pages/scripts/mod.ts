/// <reference lib="dom" />

addEventListener("load", () => {
  generateH1Containers();
  focusBlock();
});
addEventListener("hashchange", focusBlock);

const blocks: Record<string, HTMLElement> = {};
type Block = { id: string; children: HTMLElement[] };

function generateH1Containers() {
  let block: Block | undefined = undefined;
  Array.from(document.body.children).forEach((el) => {
    if (el.tagName === "H1") {
      if (block) generateContainer(block);
      block = { id: el.id, children: [] };
    }
    if (block) {
      block.children.push(el as HTMLElement);
    }
  });
  if (block) generateContainer(block);
}
function generateContainer(block: Block) {
  const container = document.createElement("article");
  block.children[0].before(container);
  container.append(...block.children);
  blocks[block.id] = container;
}
function focusBlock() {
  const hash = window.location.hash.slice(1);
  let decoded = hash ? decodeURIComponent(hash) : "title";
  if (!blocks[decoded]) decoded = "title";
  for (const key in blocks) {
    const container = blocks[key];
    if (key === decoded) {
      container.classList.add("active");
    } else {
      container.classList.remove("active");
    }
  }
}
