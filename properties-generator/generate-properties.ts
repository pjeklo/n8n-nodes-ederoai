import { INodeProperties } from "n8n-workflow";
import { N8NPropertiesBuilder } from "@devlikeapro/n8n-openapi-node";
import * as fs from "fs";
import * as path from "path";
import * as doc from "../nodes/Ederoai/openapi.json";
import { EderoaiOperationsCollector } from "./EderoaiOperationsCollector";

const config = {
    OperationsCollector: EderoaiOperationsCollector as any,
};
const parser = new N8NPropertiesBuilder(doc, config);
const properties: INodeProperties[] = parser.build();

const outputPath = path.join(__dirname, "..", "nodes", "Ederoai", "Ederoai.properties.ts");

const fileContent = `import { INodeProperties } from "n8n-workflow";

export const ederoaiProperties: INodeProperties[] = ${JSON.stringify(properties, null, 2)};
`;

fs.writeFileSync(outputPath, fileContent);

console.log(`Generated Ederoai.properties.ts at ${outputPath}`);
