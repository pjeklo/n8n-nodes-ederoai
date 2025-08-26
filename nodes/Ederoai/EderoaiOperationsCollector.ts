import { OpenAPIV3 } from "openapi-types";
import { INodeProperties } from "n8n-workflow";
import {
  OperationsCollector,
  OperationContext,
} from "@devlikeapro/n8n-openapi-node";
// Helper function to create n8n properties for VoiceSettings schema
function createVoiceSettingsProperties(
  prefix: string = "",
  displayOptions?: any,
): INodeProperties[] {
  return [
    {
      displayName: `${prefix}Voice ID`,
      name: `${prefix.toLowerCase()}voiceId`,
      type: "string",
      default: "",
      description: "ElevenLabs voice ID",
      required: true,
      displayOptions: displayOptions,
    },
    {
      displayName: `${prefix}Stability`,
      name: `${prefix.toLowerCase()}stability`,
      type: "number",
      default: 0.5,
      description: "Voice stability (0-1)",
      typeOptions: {
        minValue: 0,
        maxValue: 1,
        stepValue: 0.1,
      },
      displayOptions: displayOptions,
    },
    {
      displayName: `${prefix}Similarity Boost`,
      name: `${prefix.toLowerCase()}similarityBoost`,
      type: "number",
      default: 0.5,
      description: "Voice similarity boost (0-1)",
      typeOptions: {
        minValue: 0,
        maxValue: 1,
        stepValue: 0.1,
      },
      displayOptions: displayOptions,
    },
    {
      displayName: `${prefix}Style Exaggeration`,
      name: `${prefix.toLowerCase()}styleExaggeration`,
      type: "number",
      default: 0.5,
      description: "Style exaggeration (0-1)",
      typeOptions: {
        minValue: 0,
        maxValue: 1,
        stepValue: 0.1,
      },
      displayOptions: displayOptions,
    },
  ];
}

// Helper function to create n8n properties for LongStoryVoiceSettings schema
function createLongStoryVoiceSettingsProperties(
  prefix: string = "",
  displayOptions?: any,
): INodeProperties[] {
  return [
    {
      displayName: `${prefix}Voice ID`,
      name: `${prefix.toLowerCase()}voiceId`,
      type: "string",
      default: "",
      description: "ElevenLabs voice ID",
      required: true,
      displayOptions: displayOptions,
    },
    {
      displayName: `${prefix}Stability`,
      name: `${prefix.toLowerCase()}stability`,
      type: "number",
      default: 0.5,
      description: "Voice stability (0-1)",
      typeOptions: {
        minValue: 0,
        maxValue: 1,
        stepValue: 0.1,
      },
      displayOptions: displayOptions,
    },
    {
      displayName: `${prefix}Clarity`,
      name: `${prefix.toLowerCase()}clarity`,
      type: "number",
      default: 0.5,
      description: "Voice clarity (0-1)",
      typeOptions: {
        minValue: 0,
        maxValue: 1,
        stepValue: 0.1,
      },
      displayOptions: displayOptions,
    },
  ];
}

// Helper function to create n8n properties for BackgroundSettings schema
function createBackgroundSettingsProperties(
  prefix: string = "",
  displayOptions?: any,
): INodeProperties[] {
  return [
    {
      displayName: `${prefix}Background Type`,
      name: `${prefix.toLowerCase()}backgroundType`,
      type: "options",
      options: [
        { name: "Preset", value: "preset" },
        { name: "Generate", value: "generate" },
        { name: "Upload", value: "upload" },
      ],
      default: "preset",
      description: "Type of background to use",
      displayOptions: displayOptions,
    },
    {
      displayName: `${prefix}Preset Prompt`,
      name: `${prefix.toLowerCase()}presetPrompt`,
      type: "string",
      default: "",
      description: "Preset background prompt/ID",
      displayOptions: {
        ...displayOptions,
        show: {
          ...displayOptions?.show,
          [`${prefix.toLowerCase()}backgroundType`]: ["preset"],
        },
      },
    },
    {
      displayName: `${prefix}Custom Prompt`,
      name: `${prefix.toLowerCase()}customPrompt`,
      type: "string",
      default: "",
      description: "Custom AI generation prompt",
      displayOptions: {
        ...displayOptions,
        show: {
          ...displayOptions?.show,
          [`${prefix.toLowerCase()}backgroundType`]: ["generate"],
        },
      },
    },
    {
      displayName: `${prefix}Selected Background ID`,
      name: `${prefix.toLowerCase()}selectedBackgroundId`,
      type: "string",
      default: "",
      description: "ID of selected preset background",
      displayOptions: {
        ...displayOptions,
        show: {
          ...displayOptions?.show,
          [`${prefix.toLowerCase()}backgroundType`]: ["preset"],
        },
      },
    },
    {
      displayName: `${prefix}Uploaded File URL`,
      name: `${prefix.toLowerCase()}uploadedFileUrl`,
      type: "string",
      default: "",
      description: "URL to background file (required for upload type)",
      displayOptions: {
        ...displayOptions,
        show: {
          ...displayOptions?.show,
          [`${prefix.toLowerCase()}backgroundType`]: ["upload"],
        },
      },
    },
    {
      displayName: `${prefix}AI Generation Prompt`,
      name: `${prefix.toLowerCase()}prompt`,
      type: "string",
      default: "",
      description: "AI generation prompt (alternative to customPrompt)",
      displayOptions: {
        ...displayOptions,
        show: {
          ...displayOptions?.show,
          [`${prefix.toLowerCase()}backgroundType`]: ["generate"],
        },
      },
    },
  ];
}

// Helper function to create n8n properties for BackgroundSettingsReddit schema
function createBackgroundSettingsRedditProperties(
  prefix: string = "",
  displayOptions?: any,
): INodeProperties[] {
  return [
    {
      displayName: `${prefix}Background Type`,
      name: `${prefix.toLowerCase()}backgroundType`,
      type: "options",
      options: [
        { name: "Default", value: "default" },
        { name: "Upload", value: "upload" },
        { name: "Generate", value: "generate" },
      ],
      default: "default",
      description: "Type of background to use",
      displayOptions: displayOptions,
    },
    {
      displayName: `${prefix}Uploaded File URL`,
      name: `${prefix.toLowerCase()}uploadedFileUrl`,
      type: "string",
      default: "",
      description: "URL to background file (required for upload type)",
      displayOptions: {
        ...displayOptions,
        show: {
          ...displayOptions?.show,
          [`${prefix.toLowerCase()}backgroundType`]: ["upload"],
        },
      },
    },
    {
      displayName: `${prefix}AI Generation Prompt`,
      name: `${prefix.toLowerCase()}prompt`,
      type: "string",
      default: "",
      description: "AI generation prompt",
      displayOptions: {
        ...displayOptions,
        show: {
          ...displayOptions?.show,
          [`${prefix.toLowerCase()}backgroundType`]: ["generate"],
        },
      },
    },
  ];
}

// Helper function to create n8n properties for TypographySettings schema
function createTypographySettingsProperties(
  prefix: string = "",
  displayOptions?: any,
): INodeProperties[] {
  return [
    {
      displayName: `${prefix}Font`,
      name: `${prefix.toLowerCase()}font`,
      type: "string",
      default: "",
      description: "Font family name",
      displayOptions: displayOptions,
    },
    {
      displayName: `${prefix}Color`,
      name: `${prefix.toLowerCase()}color`,
      type: "color",
      default: "#ffffff",
      description: "Text color (hex format)",
      displayOptions: displayOptions,
    },
    {
      displayName: `${prefix}Font Size`,
      name: `${prefix.toLowerCase()}fontSize`,
      type: "number",
      default: 16,
      description: "Font size in points",
      typeOptions: {
        minValue: 8,
        maxValue: 72,
      },
      displayOptions: displayOptions,
    },
    {
      displayName: `${prefix}Background Color`,
      name: `${prefix.toLowerCase()}backgroundColor`,
      type: "color",
      default: "#000000",
      description: "Background color (hex format)",
      displayOptions: displayOptions,
    },
  ];
}

// Helper function for Answer properties (nested in Questions)
function createAnswerProperties(
  prefix: string = "",
  displayOptions?: any,
): INodeProperties[] {
  return [
    {
      displayName: `${prefix}Answer Text`,
      name: `${prefix.toLowerCase()}answerText`,
      type: "string",
      default: "",
      description: "Answer text",
      required: true,
      displayOptions: displayOptions,
    },
  ];
}

// Helper function for Question properties (nested in Quiz)
function createQuestionProperties(
  prefix: string = "",
  displayOptions?: any,
): INodeProperties[] {
  return [
    {
      displayName: `${prefix}Question Text`,
      name: `${prefix.toLowerCase()}text`,
      type: "string",
      default: "",
      description: "Question text",
      required: true,
      displayOptions: displayOptions,
    },
    {
      displayName: `${prefix}Answers`,
      name: `${prefix.toLowerCase()}answers`,
      type: "fixedCollection",
      default: {},
      description: "Array of possible answers",
      options: [
        {
          name: "answer",
          displayName: "Answer",
          values: createAnswerProperties("", displayOptions),
        },
      ],
      displayOptions: displayOptions,
    },
  ];
}

// Helper function for Message properties (nested in Fake Text)
function createMessageProperties(
  prefix: string = "",
  displayOptions?: any,
): INodeProperties[] {
  return [
    {
      displayName: `${prefix}Message Type`,
      name: `${prefix.toLowerCase()}type`,
      type: "options",
      options: [
        { name: "Left", value: "left" },
        { name: "Right", value: "right" },
      ],
      default: "left",
      description: "Message sender side",
      required: true,
      displayOptions: displayOptions,
    },
    {
      displayName: `${prefix}Message Text`,
      name: `${prefix.toLowerCase()}text`,
      type: "string",
      default: "",
      description: "Message text (required for text messages)",
      displayOptions: {
        ...displayOptions,
        show: {
          ...displayOptions?.show,
          [`${prefix.toLowerCase()}contentType`]: ["text"],
        },
      },
    },
    {
      displayName: `${prefix}Content Type`,
      name: `${prefix.toLowerCase()}contentType`,
      type: "options",
      options: [
        { name: "Text", value: "text" },
        { name: "Photo", value: "photo" },
      ],
      default: "text",
      description: "Type of message content",
      displayOptions: displayOptions,
    },
    {
      displayName: `${prefix}Photo URL`,
      name: `${prefix.toLowerCase()}photoUrl`,
      type: "string",
      default: "",
      description: "URL to photo (required for photo messages)",
      displayOptions: {
        ...displayOptions,
        show: {
          ...displayOptions?.show,
          [`${prefix.toLowerCase()}contentType`]: ["photo"],
        },
      },
    },
    {
      displayName: `${prefix}Photo Width`,
      name: `${prefix.toLowerCase()}width`,
      type: "number",
      default: 0,
      description: "Photo width in pixels (required for photo messages)",
      typeOptions: {
        minValue: 1,
      },
      displayOptions: {
        ...displayOptions,
        show: {
          ...displayOptions?.show,
          [`${prefix.toLowerCase()}contentType`]: ["photo"],
        },
      },
    },
    {
      displayName: `${prefix}Photo Height`,
      name: `${prefix.toLowerCase()}height`,
      type: "number",
      default: 0,
      description: "Photo height in pixels (required for photo messages)",
      typeOptions: {
        minValue: 1,
      },
      displayOptions: {
        ...displayOptions,
        show: {
          ...displayOptions?.show,
          [`${prefix.toLowerCase()}contentType`]: ["photo"],
        },
      },
    },
  ];
}

// Helper function for ContactInfo properties (nested in Fake Text)
function createContactInfoProperties(
  prefix: string = "",
  displayOptions?: any,
): INodeProperties[] {
  return [
    {
      displayName: `${prefix}Name`,
      name: `${prefix.toLowerCase()}name`,
      type: "string",
      default: "",
      description: "Contact name",
      displayOptions: displayOptions,
    },
    {
      displayName: `${prefix}Nickname`,
      name: `${prefix.toLowerCase()}nickname`,
      type: "string",
      default: "",
      description: "Contact nickname",
      displayOptions: displayOptions,
    },
    {
      displayName: `${prefix}Image URL`,
      name: `${prefix.toLowerCase()}imageUrl`,
      type: "string",
      default: "",
      description: "Contact avatar URL or 'auto' for letter avatar",
      displayOptions: displayOptions,
    },
    {
      displayName: `${prefix}Message Count`,
      name: `${prefix.toLowerCase()}messageCount`,
      type: "number",
      default: 0,
      description: "Number of messages in conversation history",
      typeOptions: {
        minValue: 0,
      },
      displayOptions: displayOptions,
    },
  ];
}

// Helper function for StorySource properties (nested in Reddit Story)
function createStorySourceProperties(
  prefix: string = "",
  displayOptions?: any,
): INodeProperties[] {
  return [
    {
      displayName: `${prefix}Source Type`,
      name: `${prefix.toLowerCase()}sourceType`,
      type: "options",
      options: [
        { name: "Reddit", value: "reddit" },
        { name: "Custom", value: "custom" },
      ],
      default: "reddit",
      description: "Source type for the story",
      required: true,
      displayOptions: displayOptions,
    },
    {
      displayName: `${prefix}Reddit URL`,
      name: `${prefix.toLowerCase()}redditUrl`,
      type: "string",
      default: "",
      description: "Reddit post URL (required if type is 'reddit')",
      displayOptions: {
        ...displayOptions,
        show: {
          ...displayOptions?.show,
          [`${prefix.toLowerCase()}sourceType`]: ["reddit"],
        },
      },
    },
    {
      displayName: `${prefix}Custom Content`,
      name: `${prefix.toLowerCase()}customContent`,
      type: "string",
      default: "",
      description: "Custom story content (required if type is 'custom')",
      displayOptions: {
        ...displayOptions,
        show: {
          ...displayOptions?.show,
          [`${prefix.toLowerCase()}sourceType`]: ["custom"],
        },
      },
    },
    {
      displayName: `${prefix}Custom Title`,
      name: `${prefix.toLowerCase()}customTitle`,
      type: "string",
      default: "",
      description: "Story title (required if type is 'custom')",
      displayOptions: {
        ...displayOptions,
        show: {
          ...displayOptions?.show,
          [`${prefix.toLowerCase()}sourceType`]: ["custom"],
        },
      },
    },
  ];
}

// Helper function for RedditSettings properties (nested in Reddit Story)
function createRedditSettingsProperties(
  prefix: string = "",
  displayOptions?: any,
): INodeProperties[] {
  return [
    {
      displayName: `${prefix}Comment Limit`,
      name: `${prefix.toLowerCase()}commentLimit`,
      type: "number",
      default: 5,
      description: "Maximum number of comments to include",
      typeOptions: {
        minValue: 0,
        maxValue: 50,
      },
      displayOptions: displayOptions,
    },
    {
      displayName: `${prefix}Depth Limit`,
      name: `${prefix.toLowerCase()}depthLimit`,
      type: "number",
      default: 3,
      description: "Maximum comment thread depth",
      typeOptions: {
        minValue: 1,
        maxValue: 10,
      },
      displayOptions: displayOptions,
    },
    {
      displayName: `${prefix}Min Score`,
      name: `${prefix.toLowerCase()}minScore`,
      type: "number",
      default: -100,
      description: "Minimum comment score to include",
      displayOptions: displayOptions,
    },
    {
      displayName: `${prefix}Include Comments`,
      name: `${prefix.toLowerCase()}includeComments`,
      type: "boolean",
      default: true,
      description: "Whether to include comments in the video",
      displayOptions: displayOptions,
    },
  ];
}

// Helper function for CustomStoryMetadata properties (nested in Reddit Story)
function createCustomStoryMetadataProperties(
  prefix: string = "",
  displayOptions?: any,
): INodeProperties[] {
  return [
    {
      displayName: `${prefix}Subreddit`,
      name: `${prefix.toLowerCase()}subreddit`,
      type: "string",
      default: "",
      description: "Subreddit name (without r/)",
      displayOptions: displayOptions,
    },
    {
      displayName: `${prefix}Author`,
      name: `${prefix.toLowerCase()}author`,
      type: "string",
      default: "",
      description: "Story author username",
      displayOptions: displayOptions,
    },
    {
      displayName: `${prefix}Score`,
      name: `${prefix.toLowerCase()}score`,
      type: "number",
      default: 1,
      description: "Post score/upvotes",
      typeOptions: {
        minValue: 0,
      },
      displayOptions: displayOptions,
    },
    {
      displayName: `${prefix}Upvote Ratio`,
      name: `${prefix.toLowerCase()}upvoteRatio`,
      type: "number",
      default: 1,
      description: "Upvote ratio (0-1)",
      typeOptions: {
        minValue: 0,
        maxValue: 1,
        stepValue: 0.01,
      },
      displayOptions: displayOptions,
    },
    {
      displayName: `${prefix}Number of Comments`,
      name: `${prefix.toLowerCase()}numComments`,
      type: "number",
      default: 0,
      description: "Number of comments on the post",
      typeOptions: {
        minValue: 0,
      },
      displayOptions: displayOptions,
    },
  ];
}

export class EderoaiOperationsCollector extends OperationsCollector {
  // @ts-ignore
  parseFields(
    operation: OpenAPIV3.OperationObject,
    context: OperationContext,
  ): INodeProperties[] {
    let fields = super.parseFields(operation, context);

    const newFields: INodeProperties[] = [];

    // Derive resource and method from operation and context
    const resourceTag =
      operation.tags && operation.tags.length > 0
        ? operation.tags[0]
        : undefined;
    let resource: string | undefined;
    if (resourceTag) {
      resource = resourceTag.toLowerCase().replace(/\s/g, ""); // e.g., "Fake Text" -> "faketext"
    }
    const method = context.method; // Assuming context.method exists

    for (const field of fields) {
      // Check for questions (Quiz)
      if (
        field.name === "questions" &&
        field.type === "json" &&
        resource === "quiz" &&
        method === "post"
      ) {
        newFields.push({
          displayName: "Questions",
          name: field.name, // Keep original name
          type: "fixedCollection",
          default: {},
          typeOptions: {
            multipleValues: true,
          },
          description: "Array of quiz questions",
          options: [
            {
              name: "question",
              displayName: "Question",
              values: createQuestionProperties("", field.displayOptions),
            },
          ],
          displayOptions: field.displayOptions,
        });
      }
      // Check for messages (Fake Text)
      else if (
        field.name === "messages" &&
        field.type === "json" &&
        resource === "faketext" &&
        method === "post"
      ) {
        newFields.push({
          displayName: "Messages",
          name: field.name, // Keep original name
          type: "fixedCollection",
          default: {},
          typeOptions: {
            multipleValues: true,
          },
          description: "Array of chat messages",
          options: [
            {
              name: "message",
              displayName: "Message",
              values: createMessageProperties("", field.displayOptions),
            },
          ],
          displayOptions: field.displayOptions,
        });
      }
      // Check for contactInfo (Fake Text)
      else if (
        field.name === "contactInfo" &&
        field.type === "json" &&
        resource === "faketext" &&
        method === "post"
      ) {
        newFields.push({
          displayName: "Contact Info",
          name: field.name, // Keep original name
          type: "collection",
          default: {},
          description: "Contact information for the conversation",
          options: createContactInfoProperties("", field.displayOptions),
          displayOptions: field.displayOptions,
        });
      }
      // Check for storySource (Reddit Story)
      else if (
        field.name === "storySource" &&
        field.type === "json" &&
        resource === "redditstory" &&
        method === "post"
      ) {
        newFields.push({
          displayName: "Story Source",
          name: field.name, // Keep original name
          type: "collection",
          default: {},
          description: "Source of the story content",
          options: createStorySourceProperties("", field.displayOptions),
          displayOptions: field.displayOptions,
        });
      }
      // Check for redditSettings (Reddit Story)
      else if (
        field.name === "redditSettings" &&
        field.type === "json" &&
        resource === "redditstory" &&
        method === "post"
      ) {
        newFields.push({
          displayName: "Reddit Settings",
          name: field.name, // Keep original name
          type: "collection",
          default: {},
          description: "Reddit-specific settings",
          options: createRedditSettingsProperties("", field.displayOptions),
          displayOptions: field.displayOptions,
        });
      }
      // Check for customStoryMetadata (Reddit Story)
      else if (
        field.name === "customStoryMetadata" &&
        field.type === "json" &&
        resource === "redditstory" &&
        method === "post"
      ) {
        newFields.push({
          displayName: "Custom Story Metadata",
          name: field.name, // Keep original name
          type: "collection",
          default: {},
          description: "Metadata for custom stories",
          options: createCustomStoryMetadataProperties(
            "",
            field.displayOptions,
          ),
          displayOptions: field.displayOptions,
        });
      }
      // Existing checks for voiceSettings, leftVoice, rightVoice, backgroundSettings, typography
      else if (field.name === "voiceSettings" && field.type === "json") {
        let voiceSettingsSchemaName: string | undefined;
        if (resource === "quiz" && method === "post") {
          voiceSettingsSchemaName = "VoiceSettings";
        } else if (resource === "redditstory" && method === "post") {
          voiceSettingsSchemaName = "VoiceSettings";
        } else if (resource === "longstory" && method === "post") {
          voiceSettingsSchemaName = "LongStoryVoiceSettings";
        }

        if (voiceSettingsSchemaName === "VoiceSettings") {
          newFields.push({
            displayName: "Voice Settings",
            name: field.name, // Keep original name
            type: "collection",
            default: {},
            description: "Settings for the video narration voice",
            options: createVoiceSettingsProperties("", field.displayOptions),
            displayOptions: field.displayOptions,
          });
        } else if (voiceSettingsSchemaName === "LongStoryVoiceSettings") {
          newFields.push({
            displayName: "Voice Settings",
            name: field.name, // Keep original name
            type: "collection",
            default: {},
            description: "Settings for the long story video narration voice",
            options: createLongStoryVoiceSettingsProperties(
              "",
              field.displayOptions,
            ),
            displayOptions: field.displayOptions,
          });
        } else {
          newFields.push(field);
        }
      } else if (
        field.name === "leftVoice" &&
        field.type === "json" &&
        resource === "faketext" &&
        method === "post"
      ) {
        newFields.push({
          displayName: "Left Voice Settings",
          name: field.name, // Keep original name
          type: "collection",
          default: {},
          description: "Settings for the left participant's voice",
          options: createVoiceSettingsProperties("Left ", field.displayOptions),
          displayOptions: field.displayOptions,
        });
      } else if (
        field.name === "rightVoice" &&
        field.type === "json" &&
        resource === "faketext" &&
        method === "post"
      ) {
        newFields.push({
          displayName: "Right Voice Settings",
          name: field.name, // Keep original name
          type: "collection",
          default: {},
          description: "Settings for the right participant's voice",
          options: createVoiceSettingsProperties(
            "Right ",
            field.displayOptions,
          ),
          displayOptions: field.displayOptions,
        });
      } else if (field.name === "backgroundSettings" && field.type === "json") {
        let backgroundSettingsSchemaName: string | undefined;
        if (resource === "quiz" && method === "post") {
          backgroundSettingsSchemaName = "BackgroundSettings";
        } else if (resource === "faketext" && method === "post") {
          backgroundSettingsSchemaName = "BackgroundSettings";
        } else if (resource === "redditstory" && method === "post") {
          backgroundSettingsSchemaName = "BackgroundSettingsReddit";
        }

        if (backgroundSettingsSchemaName === "BackgroundSettings") {
          newFields.push({
            displayName: "Background Settings",
            name: field.name, // Keep original name
            type: "collection",
            default: {},
            description: "Settings for the video background",
            options: createBackgroundSettingsProperties(
              "",
              field.displayOptions,
            ),
            displayOptions: field.displayOptions,
          });
        } else if (
          backgroundSettingsSchemaName === "BackgroundSettingsReddit"
        ) {
          newFields.push({
            displayName: "Reddit Background Settings",
            name: field.name, // Keep original name
            type: "collection",
            default: {},
            description: "Settings for the Reddit video background",
            options: createBackgroundSettingsRedditProperties(
              "",
              field.displayOptions,
            ),
            displayOptions: field.displayOptions,
          });
        } else {
          newFields.push(field);
        }
      } else if (
        field.name === "typography" &&
        field.type === "json" &&
        resource === "faketext" &&
        method === "post"
      ) {
        newFields.push({
          displayName: "Typography Settings",
          name: field.name, // Keep original name
          type: "collection",
          default: {},
          description: "Typography settings for messages",
          options: [
            {
              displayName: "Left Typography",
              name: "left", // Keep original name
              type: "fixedCollection",
              default: {},
              options: [
                {
                  name: "leftTypography",
                  displayName: "Left Typography",
                  values: createTypographySettingsProperties(
                    "Left ",
                    field.displayOptions,
                  ),
                },
              ],
              displayOptions: field.displayOptions,
            },
            {
              displayName: "Right Typography",
              name: "right", // Keep original name
              type: "fixedCollection",
              default: {},
              options: [
                {
                  name: "rightTypography",
                  displayName: "Right Typography",
                  values: createTypographySettingsProperties(
                    "Right ",
                    field.displayOptions,
                  ),
                },
              ],
              displayOptions: field.displayOptions,
            },
          ],
          displayOptions: field.displayOptions,
        });
      } else {
        newFields.push(field);
      }
    }

    return newFields;
  }
}
