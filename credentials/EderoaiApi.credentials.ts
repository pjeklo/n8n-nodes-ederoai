import {
  IAuthenticateGeneric,
  ICredentialTestRequest,
  ICredentialType,
  INodeProperties,
} from "n8n-workflow";

export class EderoaiApi implements ICredentialType {
  name = "ederoaiApi";
  displayName = "edero.ai API";
  documentationUrl = "https://app.edero.ai/docs";
  properties: INodeProperties[] = [
    {
      displayName: "edero.ai API URL",
      name: "url",
      placeholder: "https://app.edero.ai/api/public",
      type: "string",
      default: "https://app.edero.ai/api/public",
      required: true,
    },
    {
      displayName: "API Key",
      name: "accessToken",
      type: "string",
      placeholder: "YOUR_API_KEY",
      default: "",
      required: true,
      typeOptions: { password: true },
    },
  ];

  authenticate: IAuthenticateGeneric = {
    type: "generic",
    properties: {
      headers: {
        Authorization: '={{"Bearer " + $credentials.accessToken}}',
      },
    },
  };

  test: ICredentialTestRequest = {
    request: {
      baseURL: "={{$credentials.url}}",
      url: "/info",
    },
  };
}
