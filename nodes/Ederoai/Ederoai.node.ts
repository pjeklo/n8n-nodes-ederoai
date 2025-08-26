import { INodeType, INodeTypeDescription } from "n8n-workflow";
import { ederoaiProperties } from "./Ederoai.properties";

export class Ederoai implements INodeType {
  description: INodeTypeDescription = {
    displayName: "edero.ai",
    name: "ederoai",
    icon: "file:logo.svg",
    group: ["transform"],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: "Interact with edero.ai API",
    defaults: {
      name: "ederoai",
    },
    inputs: ["main"],
    outputs: ["main"],
    credentials: [
      {
        name: "ederoaiApi",
        required: true,
      },
    ],
    requestDefaults: {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      baseURL: "={{$credentials.url}}",
    },
    properties: ederoaiProperties,
  };
}
