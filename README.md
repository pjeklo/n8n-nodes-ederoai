# n8n-nodes-ederoai
<div align="center">
  <img src="https://edero.ai/wp-content/uploads/2021/01/edero.png" alt="edero.ai" height="64" >
  <br>
  <strong>Powered by <a href="https://edero.ai/">edero.ai</a></strong>
<br>
<br>

[![n8n](https://img.shields.io/badge/n8n-Community%20Node-EA4B71?style=flat)](https://n8n.io/)
[![npm](https://img.shields.io/npm/v/n8n-nodes-ederoai?color=CB3837&logo=npm)](https://www.npmjs.com/package/n8n-nodes-ederoai)

</div>

This is an n8n community node. It lets you use EderoAI in your n8n workflows.

EderoAI is an AI-powered video creation platform that lets you generate quiz, fake text, Reddit story, and long story videos programmatically, and track their status.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Usage](#usage)  
[Resources](#resources)  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

This node supports the following EderoAI operations:

*   **Create Quiz Video**: Generate interactive quiz videos from questions and answers.
*   **Create Fake Text Conversation Video**: Generate realistic text conversation videos.
*   **Create Reddit Story Video**: Generate videos from Reddit posts or custom stories.
*   **Create Long Story Video**: Generate videos from long-form stories with narration and visuals.
*   **Get Task Status**: Check the status and retrieve results of video generation tasks.

## Credentials

To use this node, you need an EderoAI API key.

**Prerequisites:**
*   Sign up for an account at [edero.ai](https://app.edero.ai/)

**Setup:**
1.  Log in to your [edero.ai dashboard](https://app.edero.ai/)
2.  Navigate to [Integrations](https://app.edero.ai/integrations)
3.  Generate a new API key
4.  In n8n, create a new credential of type "EderoaiApi"
5.  Enter your API key in the credential configuration

## Compatibility

*   **Minimum n8n version:** 1.0.0
*   **Tested with:** n8n 1.0.0+
*   **Known issues:** None

## Usage

1.  Add the **Edero.ai** node to your workflow.
2.  Configure the node with your EderoAI credentials.
3.  Select the desired operation from the 'Operation' dropdown.
4.  Fill in the required parameters for your chosen operation.
5.  For video creation operations, save the returned `taskId` and use it with the 'Get Task Status' operation to monitor progress and retrieve the final video URL.

> 💡 **Tip:** Video generation is asynchronous. Always use the 'Get Task Status' operation to check when your video is ready and get the download link.

## Resources

*   [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
*   [EderoAI API documentation](https://app.edero.ai/integrations)
*   [EderoAI platform](https://edero.ai/)
