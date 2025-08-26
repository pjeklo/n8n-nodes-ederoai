import { Ederoai } from "./Ederoai.node";

test("smoke", () => {
  const node = new Ederoai();
  expect(node.description.properties).toBeDefined();
});
