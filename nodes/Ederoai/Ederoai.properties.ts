import { INodeProperties } from "n8n-workflow";

export const ederoaiProperties: INodeProperties[] = [
  {
    "displayName": "Resource",
    "name": "resource",
    "type": "options",
    "noDataExpression": true,
    "options": [
      {
        "name": "Quiz",
        "value": "Quiz",
        "description": "Quiz video generation"
      },
      {
        "name": "Fake Text",
        "value": "Fake Text",
        "description": "Fake text conversation video generation"
      },
      {
        "name": "Reddit Story",
        "value": "Reddit Story",
        "description": "Reddit story video generation"
      },
      {
        "name": "Long Story",
        "value": "Long Story",
        "description": "Long story video generation"
      },
      {
        "name": "Task",
        "value": "Task",
        "description": "Video task status"
      }
    ],
    "default": ""
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Quiz"
        ]
      }
    },
    "options": [
      {
        "name": "",
        "value": "",
        "action": "Create quiz video",
        "description": "Generate a quiz video with questions, answers, and voice narration",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/quiz"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Fake Text"
        ]
      }
    },
    "options": [
      {
        "name": "",
        "value": "",
        "action": "Create fake text conversation video",
        "description": "Generate a video of fake text messages between two participants",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/fake-text"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Reddit Story"
        ]
      }
    },
    "options": [
      {
        "name": "",
        "value": "",
        "action": "Create Reddit story video",
        "description": "Generate a video from a Reddit post or custom story content",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/reddit-story"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Long Story"
        ]
      }
    },
    "options": [
      {
        "name": "",
        "value": "",
        "action": "Create long story video",
        "description": "Generate a video from a long-form story with narration and visuals",
        "routing": {
          "request": {
            "method": "POST",
            "url": "=/long-story"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "Operation",
    "name": "operation",
    "type": "options",
    "noDataExpression": true,
    "displayOptions": {
      "show": {
        "resource": [
          "Task"
        ]
      }
    },
    "options": [
      {
        "name": "",
        "value": "",
        "action": "Get task status",
        "description": "Get the status of any video generation task by its ID",
        "routing": {
          "request": {
            "method": "GET",
            "url": "=/task/{{$parameter[\"taskId\"]}}"
          }
        }
      }
    ],
    "default": ""
  },
  {
    "displayName": "POST /quiz",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Quiz"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Name",
    "name": "name",
    "type": "string",
    "default": "Geography Quiz",
    "description": "Video title/name",
    "routing": {
      "request": {
        "body": {
          "name": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Quiz"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Questions",
    "name": "questions",
    "type": "fixedCollection",
    "default": {},
    "typeOptions": {
      "multipleValues": true
    },
    "description": "Array of quiz questions",
    "options": [
      {
        "name": "question",
        "displayName": "Question",
        "values": [
          {
            "displayName": "Question Text",
            "name": "text",
            "type": "string",
            "default": "",
            "description": "Question text",
            "required": true
          },
          {
            "displayName": "Answers",
            "name": "answers",
            "type": "fixedCollection",
            "default": {},
            "description": "Array of possible answers",
            "options": [
              {
                "name": "answer",
                "displayName": "Answer",
                "values": [
                  {
                    "displayName": "Answer Text",
                    "name": "answerText",
                    "type": "string",
                    "default": "",
                    "description": "Answer text",
                    "required": true
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "Quiz"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Voice Settings",
    "name": "voiceSettings",
    "type": "collection",
    "default": {},
    "description": "Settings for the video narration voice",
    "options": [
      {
        "displayName": "Voice ID",
        "name": "voiceId",
        "type": "string",
        "default": "",
        "description": "ElevenLabs voice ID",
        "required": true
      },
      {
        "displayName": "Stability",
        "name": "stability",
        "type": "number",
        "default": 0.5,
        "description": "Voice stability (0-1)",
        "typeOptions": {
          "minValue": 0,
          "maxValue": 1,
          "stepValue": 0.1
        }
      },
      {
        "displayName": "Similarity Boost",
        "name": "similarityBoost",
        "type": "number",
        "default": 0.5,
        "description": "Voice similarity boost (0-1)",
        "typeOptions": {
          "minValue": 0,
          "maxValue": 1,
          "stepValue": 0.1
        }
      },
      {
        "displayName": "Style Exaggeration",
        "name": "styleExaggeration",
        "type": "number",
        "default": 0.5,
        "description": "Style exaggeration (0-1)",
        "typeOptions": {
          "minValue": 0,
          "maxValue": 1,
          "stepValue": 0.1
        }
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "Quiz"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Answer Template",
    "name": "answerTemplate",
    "type": "string",
    "default": "The answer is {{answer}}",
    "description": "Template for answer text formatting",
    "routing": {
      "request": {
        "body": {
          "answerTemplate": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Quiz"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Theme",
    "name": "theme",
    "type": "options",
    "default": "light",
    "options": [
      {
        "name": "Light",
        "value": "light"
      },
      {
        "name": "Dark",
        "value": "dark"
      }
    ],
    "routing": {
      "request": {
        "body": {
          "theme": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Quiz"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Question Display Time",
    "name": "questionDisplayTime",
    "type": "number",
    "default": 5,
    "description": "Time to display each question (seconds)",
    "routing": {
      "request": {
        "body": {
          "questionDisplayTime": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Quiz"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Answer Display Time",
    "name": "answerDisplayTime",
    "type": "number",
    "default": 3,
    "description": "Time to display each answer (seconds)",
    "routing": {
      "request": {
        "body": {
          "answerDisplayTime": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Quiz"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Show Correct Answers",
    "name": "showCorrectAnswers",
    "type": "boolean",
    "default": false,
    "description": "Whether to highlight correct answers",
    "routing": {
      "request": {
        "body": {
          "showCorrectAnswers": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Quiz"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Background Settings",
    "name": "backgroundSettings",
    "type": "collection",
    "default": {},
    "description": "Settings for the video background",
    "options": [
      {
        "displayName": "Background Type",
        "name": "backgroundType",
        "type": "options",
        "options": [
          {
            "name": "Preset",
            "value": "preset"
          },
          {
            "name": "Generate",
            "value": "generate"
          },
          {
            "name": "Upload",
            "value": "upload"
          }
        ],
        "default": "preset",
        "description": "Type of background to use"
      },
      {
        "displayName": "Preset Prompt",
        "name": "presetPrompt",
        "type": "string",
        "default": "",
        "description": "Preset background prompt/ID",
        "displayOptions": {
          "show": {
            "backgroundType": [
              "preset"
            ]
          }
        }
      },
      {
        "displayName": "Custom Prompt",
        "name": "customPrompt",
        "type": "string",
        "default": "",
        "description": "Custom AI generation prompt",
        "displayOptions": {
          "show": {
            "backgroundType": [
              "generate"
            ]
          }
        }
      },
      {
        "displayName": "Selected Background ID",
        "name": "selectedBackgroundId",
        "type": "string",
        "default": "",
        "description": "ID of selected preset background",
        "displayOptions": {
          "show": {
            "backgroundType": [
              "preset"
            ]
          }
        }
      },
      {
        "displayName": "Uploaded File URL",
        "name": "uploadedFileUrl",
        "type": "string",
        "default": "",
        "description": "URL to background file (required for upload type)",
        "displayOptions": {
          "show": {
            "backgroundType": [
              "upload"
            ]
          }
        }
      },
      {
        "displayName": "AI Generation Prompt",
        "name": "prompt",
        "type": "string",
        "default": "",
        "description": "AI generation prompt (alternative to customPrompt)",
        "displayOptions": {
          "show": {
            "backgroundType": [
              "generate"
            ]
          }
        }
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "Quiz"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "POST /fake-text",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Fake Text"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Name",
    "name": "name",
    "type": "string",
    "default": "Funny Conversation",
    "description": "Video title/name",
    "routing": {
      "request": {
        "body": {
          "name": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Fake Text"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Template",
    "name": "template",
    "type": "options",
    "default": "iMessage",
    "description": "Chat template style",
    "options": [
      {
        "name": "I Message",
        "value": "iMessage"
      },
      {
        "name": "Whatsapp",
        "value": "whatsapp"
      },
      {
        "name": "Instagram",
        "value": "instagram"
      },
      {
        "name": "Tinder",
        "value": "tinder"
      }
    ],
    "routing": {
      "request": {
        "body": {
          "template": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Fake Text"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Messages",
    "name": "messages",
    "type": "fixedCollection",
    "default": {},
    "typeOptions": {
      "multipleValues": true
    },
    "description": "Array of chat messages",
    "options": [
      {
        "name": "message",
        "displayName": "Message",
        "values": [
          {
            "displayName": "Message Type",
            "name": "type",
            "type": "options",
            "options": [
              {
                "name": "Left",
                "value": "left"
              },
              {
                "name": "Right",
                "value": "right"
              }
            ],
            "default": "left",
            "description": "Message sender side",
            "required": true
          },
          {
            "displayName": "Message Text",
            "name": "text",
            "type": "string",
            "default": "",
            "description": "Message text (required for text messages)",
            "displayOptions": {
              "show": {
                "contentType": [
                  "text"
                ]
              }
            }
          },
          {
            "displayName": "Content Type",
            "name": "contentType",
            "type": "options",
            "options": [
              {
                "name": "Text",
                "value": "text"
              },
              {
                "name": "Photo",
                "value": "photo"
              }
            ],
            "default": "text",
            "description": "Type of message content"
          },
          {
            "displayName": "Photo URL",
            "name": "photoUrl",
            "type": "string",
            "default": "",
            "description": "URL to photo (required for photo messages)",
            "displayOptions": {
              "show": {
                "contentType": [
                  "photo"
                ]
              }
            }
          },
          {
            "displayName": "Photo Width",
            "name": "width",
            "type": "number",
            "default": 0,
            "description": "Photo width in pixels (required for photo messages)",
            "typeOptions": {
              "minValue": 1
            },
            "displayOptions": {
              "show": {
                "contentType": [
                  "photo"
                ]
              }
            }
          },
          {
            "displayName": "Photo Height",
            "name": "height",
            "type": "number",
            "default": 0,
            "description": "Photo height in pixels (required for photo messages)",
            "typeOptions": {
              "minValue": 1
            },
            "displayOptions": {
              "show": {
                "contentType": [
                  "photo"
                ]
              }
            }
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "Fake Text"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Left Voice Settings",
    "name": "leftVoice",
    "type": "collection",
    "default": {},
    "description": "Settings for the left participant's voice",
    "options": [
      {
        "displayName": "Left Voice ID",
        "name": "left voiceId",
        "type": "string",
        "default": "",
        "description": "ElevenLabs voice ID",
        "required": true
      },
      {
        "displayName": "Left Stability",
        "name": "left stability",
        "type": "number",
        "default": 0.5,
        "description": "Voice stability (0-1)",
        "typeOptions": {
          "minValue": 0,
          "maxValue": 1,
          "stepValue": 0.1
        }
      },
      {
        "displayName": "Left Similarity Boost",
        "name": "left similarityBoost",
        "type": "number",
        "default": 0.5,
        "description": "Voice similarity boost (0-1)",
        "typeOptions": {
          "minValue": 0,
          "maxValue": 1,
          "stepValue": 0.1
        }
      },
      {
        "displayName": "Left Style Exaggeration",
        "name": "left styleExaggeration",
        "type": "number",
        "default": 0.5,
        "description": "Style exaggeration (0-1)",
        "typeOptions": {
          "minValue": 0,
          "maxValue": 1,
          "stepValue": 0.1
        }
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "Fake Text"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Right Voice Settings",
    "name": "rightVoice",
    "type": "collection",
    "default": {},
    "description": "Settings for the right participant's voice",
    "options": [
      {
        "displayName": "Right Voice ID",
        "name": "right voiceId",
        "type": "string",
        "default": "",
        "description": "ElevenLabs voice ID",
        "required": true
      },
      {
        "displayName": "Right Stability",
        "name": "right stability",
        "type": "number",
        "default": 0.5,
        "description": "Voice stability (0-1)",
        "typeOptions": {
          "minValue": 0,
          "maxValue": 1,
          "stepValue": 0.1
        }
      },
      {
        "displayName": "Right Similarity Boost",
        "name": "right similarityBoost",
        "type": "number",
        "default": 0.5,
        "description": "Voice similarity boost (0-1)",
        "typeOptions": {
          "minValue": 0,
          "maxValue": 1,
          "stepValue": 0.1
        }
      },
      {
        "displayName": "Right Style Exaggeration",
        "name": "right styleExaggeration",
        "type": "number",
        "default": 0.5,
        "description": "Style exaggeration (0-1)",
        "typeOptions": {
          "minValue": 0,
          "maxValue": 1,
          "stepValue": 0.1
        }
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "Fake Text"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Theme",
    "name": "theme",
    "type": "options",
    "default": "light",
    "options": [
      {
        "name": "Light",
        "value": "light"
      },
      {
        "name": "Dark",
        "value": "dark"
      }
    ],
    "routing": {
      "request": {
        "body": {
          "theme": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Fake Text"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Message Gap",
    "name": "messageGap",
    "type": "number",
    "default": 1000,
    "description": "Gap between messages in milliseconds",
    "routing": {
      "request": {
        "body": {
          "messageGap": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Fake Text"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Speed",
    "name": "speed",
    "type": "number",
    "default": 1.5,
    "description": "Playback speed multiplier",
    "routing": {
      "request": {
        "body": {
          "speed": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Fake Text"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Emoji Type",
    "name": "emojiType",
    "type": "options",
    "default": "facebook",
    "description": "Emoji style to use",
    "options": [
      {
        "name": "Facebook",
        "value": "facebook"
      },
      {
        "name": "Twitter",
        "value": "twitter"
      },
      {
        "name": "Apple",
        "value": "apple"
      },
      {
        "name": "Google",
        "value": "google"
      }
    ],
    "routing": {
      "request": {
        "body": {
          "emojiType": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Fake Text"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Contact Info",
    "name": "contactInfo",
    "type": "collection",
    "default": {},
    "description": "Contact information for the conversation",
    "options": [
      {
        "displayName": "Name",
        "name": "name",
        "type": "string",
        "default": "",
        "description": "Contact name"
      },
      {
        "displayName": "Nickname",
        "name": "nickname",
        "type": "string",
        "default": "",
        "description": "Contact nickname"
      },
      {
        "displayName": "Image URL",
        "name": "imageUrl",
        "type": "string",
        "default": "",
        "description": "Contact avatar URL or 'auto' for letter avatar"
      },
      {
        "displayName": "Message Count",
        "name": "messageCount",
        "type": "number",
        "default": 0,
        "description": "Number of messages in conversation history",
        "typeOptions": {
          "minValue": 0
        }
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "Fake Text"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Typography Settings",
    "name": "typography",
    "type": "collection",
    "default": {},
    "description": "Typography settings for messages",
    "options": [
      {
        "displayName": "Left Typography",
        "name": "left",
        "type": "fixedCollection",
        "default": {},
        "options": [
          {
            "name": "leftTypography",
            "displayName": "Left Typography",
            "values": [
              {
                "displayName": "Left Font",
                "name": "left font",
                "type": "string",
                "default": "",
                "description": "Font family name"
              },
              {
                "displayName": "Left Color",
                "name": "left color",
                "type": "color",
                "default": "#ffffff",
                "description": "Text color (hex format)"
              },
              {
                "displayName": "Left Font Size",
                "name": "left fontSize",
                "type": "number",
                "default": 16,
                "description": "Font size in points",
                "typeOptions": {
                  "minValue": 8,
                  "maxValue": 72
                }
              },
              {
                "displayName": "Left Background Color",
                "name": "left backgroundColor",
                "type": "color",
                "default": "#000000",
                "description": "Background color (hex format)"
              }
            ]
          }
        ]
      },
      {
        "displayName": "Right Typography",
        "name": "right",
        "type": "fixedCollection",
        "default": {},
        "options": [
          {
            "name": "rightTypography",
            "displayName": "Right Typography",
            "values": [
              {
                "displayName": "Right Font",
                "name": "right font",
                "type": "string",
                "default": "",
                "description": "Font family name"
              },
              {
                "displayName": "Right Color",
                "name": "right color",
                "type": "color",
                "default": "#ffffff",
                "description": "Text color (hex format)"
              },
              {
                "displayName": "Right Font Size",
                "name": "right fontSize",
                "type": "number",
                "default": 16,
                "description": "Font size in points",
                "typeOptions": {
                  "minValue": 8,
                  "maxValue": 72
                }
              },
              {
                "displayName": "Right Background Color",
                "name": "right backgroundColor",
                "type": "color",
                "default": "#000000",
                "description": "Background color (hex format)"
              }
            ]
          }
        ]
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "Fake Text"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Background Settings",
    "name": "backgroundSettings",
    "type": "collection",
    "default": {},
    "description": "Settings for the video background",
    "options": [
      {
        "displayName": "Background Type",
        "name": "backgroundType",
        "type": "options",
        "options": [
          {
            "name": "Preset",
            "value": "preset"
          },
          {
            "name": "Generate",
            "value": "generate"
          },
          {
            "name": "Upload",
            "value": "upload"
          }
        ],
        "default": "preset",
        "description": "Type of background to use"
      },
      {
        "displayName": "Preset Prompt",
        "name": "presetPrompt",
        "type": "string",
        "default": "",
        "description": "Preset background prompt/ID",
        "displayOptions": {
          "show": {
            "backgroundType": [
              "preset"
            ]
          }
        }
      },
      {
        "displayName": "Custom Prompt",
        "name": "customPrompt",
        "type": "string",
        "default": "",
        "description": "Custom AI generation prompt",
        "displayOptions": {
          "show": {
            "backgroundType": [
              "generate"
            ]
          }
        }
      },
      {
        "displayName": "Selected Background ID",
        "name": "selectedBackgroundId",
        "type": "string",
        "default": "",
        "description": "ID of selected preset background",
        "displayOptions": {
          "show": {
            "backgroundType": [
              "preset"
            ]
          }
        }
      },
      {
        "displayName": "Uploaded File URL",
        "name": "uploadedFileUrl",
        "type": "string",
        "default": "",
        "description": "URL to background file (required for upload type)",
        "displayOptions": {
          "show": {
            "backgroundType": [
              "upload"
            ]
          }
        }
      },
      {
        "displayName": "AI Generation Prompt",
        "name": "prompt",
        "type": "string",
        "default": "",
        "description": "AI generation prompt (alternative to customPrompt)",
        "displayOptions": {
          "show": {
            "backgroundType": [
              "generate"
            ]
          }
        }
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "Fake Text"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "POST /reddit-story",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Reddit Story"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Name",
    "name": "name",
    "type": "string",
    "default": "AITA Reddit Story",
    "description": "Video title/name",
    "routing": {
      "request": {
        "body": {
          "name": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Reddit Story"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Template",
    "name": "template",
    "type": "options",
    "default": "TextOnly",
    "description": "Currently only TextOnly template is supported",
    "options": [
      {
        "name": "Text Only",
        "value": "TextOnly"
      }
    ],
    "routing": {
      "request": {
        "body": {
          "template": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Reddit Story"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Story Source",
    "name": "storySource",
    "type": "collection",
    "default": {},
    "description": "Source of the story content",
    "options": [
      {
        "displayName": "Source Type",
        "name": "sourceType",
        "type": "options",
        "options": [
          {
            "name": "Reddit",
            "value": "reddit"
          },
          {
            "name": "Custom",
            "value": "custom"
          }
        ],
        "default": "reddit",
        "description": "Source type for the story",
        "required": true
      },
      {
        "displayName": "Reddit URL",
        "name": "redditUrl",
        "type": "string",
        "default": "",
        "description": "Reddit post URL (required if type is 'reddit')",
        "displayOptions": {
          "show": {
            "sourceType": [
              "reddit"
            ]
          }
        }
      },
      {
        "displayName": "Custom Content",
        "name": "customContent",
        "type": "string",
        "default": "",
        "description": "Custom story content (required if type is 'custom')",
        "displayOptions": {
          "show": {
            "sourceType": [
              "custom"
            ]
          }
        }
      },
      {
        "displayName": "Custom Title",
        "name": "customTitle",
        "type": "string",
        "default": "",
        "description": "Story title (required if type is 'custom')",
        "displayOptions": {
          "show": {
            "sourceType": [
              "custom"
            ]
          }
        }
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "Reddit Story"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Voice Settings",
    "name": "voiceSettings",
    "type": "collection",
    "default": {},
    "description": "Settings for the video narration voice",
    "options": [
      {
        "displayName": "Voice ID",
        "name": "voiceId",
        "type": "string",
        "default": "",
        "description": "ElevenLabs voice ID",
        "required": true
      },
      {
        "displayName": "Stability",
        "name": "stability",
        "type": "number",
        "default": 0.5,
        "description": "Voice stability (0-1)",
        "typeOptions": {
          "minValue": 0,
          "maxValue": 1,
          "stepValue": 0.1
        }
      },
      {
        "displayName": "Similarity Boost",
        "name": "similarityBoost",
        "type": "number",
        "default": 0.5,
        "description": "Voice similarity boost (0-1)",
        "typeOptions": {
          "minValue": 0,
          "maxValue": 1,
          "stepValue": 0.1
        }
      },
      {
        "displayName": "Style Exaggeration",
        "name": "styleExaggeration",
        "type": "number",
        "default": 0.5,
        "description": "Style exaggeration (0-1)",
        "typeOptions": {
          "minValue": 0,
          "maxValue": 1,
          "stepValue": 0.1
        }
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "Reddit Story"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Reddit Settings",
    "name": "redditSettings",
    "type": "collection",
    "default": {},
    "description": "Reddit-specific settings",
    "options": [
      {
        "displayName": "Comment Limit",
        "name": "commentLimit",
        "type": "number",
        "default": 5,
        "description": "Maximum number of comments to include",
        "typeOptions": {
          "minValue": 0,
          "maxValue": 50
        }
      },
      {
        "displayName": "Depth Limit",
        "name": "depthLimit",
        "type": "number",
        "default": 3,
        "description": "Maximum comment thread depth",
        "typeOptions": {
          "minValue": 1,
          "maxValue": 10
        }
      },
      {
        "displayName": "Min Score",
        "name": "minScore",
        "type": "number",
        "default": -100,
        "description": "Minimum comment score to include"
      },
      {
        "displayName": "Include Comments",
        "name": "includeComments",
        "type": "boolean",
        "default": true,
        "description": "Whether to include comments in the video"
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "Reddit Story"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Custom Story Metadata",
    "name": "customStoryMetadata",
    "type": "collection",
    "default": {},
    "description": "Metadata for custom stories",
    "options": [
      {
        "displayName": "Subreddit",
        "name": "subreddit",
        "type": "string",
        "default": "",
        "description": "Subreddit name (without r/)"
      },
      {
        "displayName": "Author",
        "name": "author",
        "type": "string",
        "default": "",
        "description": "Story author username"
      },
      {
        "displayName": "Score",
        "name": "score",
        "type": "number",
        "default": 1,
        "description": "Post score/upvotes",
        "typeOptions": {
          "minValue": 0
        }
      },
      {
        "displayName": "Upvote Ratio",
        "name": "upvoteRatio",
        "type": "number",
        "default": 1,
        "description": "Upvote ratio (0-1)",
        "typeOptions": {
          "minValue": 0,
          "maxValue": 1,
          "stepValue": 0.01
        }
      },
      {
        "displayName": "Number of Comments",
        "name": "numComments",
        "type": "number",
        "default": 0,
        "description": "Number of comments on the post",
        "typeOptions": {
          "minValue": 0
        }
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "Reddit Story"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Reddit Background Settings",
    "name": "backgroundSettings",
    "type": "collection",
    "default": {},
    "description": "Settings for the Reddit video background",
    "options": [
      {
        "displayName": "Background Type",
        "name": "backgroundType",
        "type": "options",
        "options": [
          {
            "name": "Default",
            "value": "default"
          },
          {
            "name": "Upload",
            "value": "upload"
          },
          {
            "name": "Generate",
            "value": "generate"
          }
        ],
        "default": "default",
        "description": "Type of background to use"
      },
      {
        "displayName": "Uploaded File URL",
        "name": "uploadedFileUrl",
        "type": "string",
        "default": "",
        "description": "URL to background file (required for upload type)",
        "displayOptions": {
          "show": {
            "backgroundType": [
              "upload"
            ]
          }
        }
      },
      {
        "displayName": "AI Generation Prompt",
        "name": "prompt",
        "type": "string",
        "default": "",
        "description": "AI generation prompt",
        "displayOptions": {
          "show": {
            "backgroundType": [
              "generate"
            ]
          }
        }
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "Reddit Story"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "POST /long-story",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Long Story"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Title",
    "name": "title",
    "type": "string",
    "default": "The Mysterious Island",
    "description": "Title of the long story video",
    "routing": {
      "request": {
        "body": {
          "title": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Long Story"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "required": true,
    "displayName": "Story",
    "name": "story",
    "type": "string",
    "default": "Once upon a time, in a galaxy far, far away...",
    "description": "The full story text to be narrated",
    "routing": {
      "request": {
        "body": {
          "story": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Long Story"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Description",
    "name": "description",
    "type": "string",
    "default": "A sci-fi adventure story",
    "description": "Optional description of the video",
    "routing": {
      "request": {
        "body": {
          "description": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Long Story"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Voice Settings",
    "name": "voiceSettings",
    "type": "collection",
    "default": {},
    "description": "Settings for the long story video narration voice",
    "options": [
      {
        "displayName": "Voice ID",
        "name": "voiceId",
        "type": "string",
        "default": "",
        "description": "ElevenLabs voice ID",
        "required": true
      },
      {
        "displayName": "Stability",
        "name": "stability",
        "type": "number",
        "default": 0.5,
        "description": "Voice stability (0-1)",
        "typeOptions": {
          "minValue": 0,
          "maxValue": 1,
          "stepValue": 0.1
        }
      },
      {
        "displayName": "Clarity",
        "name": "clarity",
        "type": "number",
        "default": 0.5,
        "description": "Voice clarity (0-1)",
        "typeOptions": {
          "minValue": 0,
          "maxValue": 1,
          "stepValue": 0.1
        }
      }
    ],
    "displayOptions": {
      "show": {
        "resource": [
          "Long Story"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Aspect Ratio",
    "name": "aspectRatio",
    "type": "string",
    "default": "16:9",
    "description": "Aspect ratio for the video (e.g., 16:9, 9:16)",
    "routing": {
      "request": {
        "body": {
          "aspectRatio": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Long Story"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Visual Style",
    "name": "visualStyle",
    "type": "string",
    "default": "realistic",
    "description": "Visual style for the video (e.g., realistic, cartoon)",
    "routing": {
      "request": {
        "body": {
          "visualStyle": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Long Story"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Subtitle Style",
    "name": "subtitleStyle",
    "type": "string",
    "default": "default",
    "description": "Style of subtitles (e.g., default, minimal, styled)",
    "routing": {
      "request": {
        "body": {
          "subtitleStyle": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Long Story"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Custom Prompt",
    "name": "customPrompt",
    "type": "string",
    "default": "futuristic cityscape",
    "description": "Custom prompt for generating visuals",
    "routing": {
      "request": {
        "body": {
          "customPrompt": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Long Story"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Context Image Url",
    "name": "contextImageUrl",
    "type": "string",
    "default": "https://example.com/image.jpg",
    "description": "URL to a context image for visual generation",
    "routing": {
      "request": {
        "body": {
          "contextImageUrl": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Long Story"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Skip Animations",
    "name": "skip_animations",
    "type": "boolean",
    "default": false,
    "description": "Whether to skip animations in the video",
    "routing": {
      "request": {
        "body": {
          "skip_animations": "={{ $value }}"
        }
      }
    },
    "displayOptions": {
      "show": {
        "resource": [
          "Long Story"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "GET /task/{taskId}",
    "name": "operation",
    "type": "notice",
    "typeOptions": {
      "theme": "info"
    },
    "default": "",
    "displayOptions": {
      "show": {
        "resource": [
          "Task"
        ],
        "operation": [
          ""
        ]
      }
    }
  },
  {
    "displayName": "Task Id",
    "name": "taskId",
    "required": true,
    "description": "The task/video ID returned from video creation endpoints",
    "default": "video_123",
    "type": "string",
    "displayOptions": {
      "show": {
        "resource": [
          "Task"
        ],
        "operation": [
          ""
        ]
      }
    }
  }
];
