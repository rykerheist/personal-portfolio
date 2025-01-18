const { SessionsClient } = require('@google-cloud/dialogflow');

// Create a Dialogflow sessions client
const sessionClient = new SessionsClient();

exports.dialogflowProxy = async (req, res) => {
  console.log("Request body:", req.body); // Log the entire request body

  // Set CORS headers to allow requests from any origin
  res.set('Access-Control-Allow-Origin', '*');

  // Handle preflight OPTIONS request for CORS
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
    return;
  }

  // Only handle POST requests
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  // Handle empty or malformed request body
  if (!req.body || !req.body.query || !req.body.sessionId) {
    console.error("Error: Invalid request body. Missing query or sessionId.");
    return res.status(400).send("Error: Invalid request body");
  }

  try {
    const { query, sessionId } = req.body;

    console.log("Query:", query);
    console.log("Session ID from request:", sessionId);

    // Get projectId using the client library function
    const projectId = await sessionClient.getProjectId();
    console.log("Project ID (from getProjectId):", projectId);

    // Check if sessionId and projectId are defined before calling projectAgentSessionPath
    if (
      typeof sessionId === "undefined" ||
      sessionId === null ||
      sessionId === ""
    ) {
      console.error("Error: sessionId is undefined or not properly set.");
      res.status(500).send("Error: sessionId is undefined");
      return;
    }

    if (!projectId) {
      console.error(
        "Error: projectId is undefined. Could not get project ID using getProjectId()."
      );
      res.status(500).send("Error: projectId is undefined");
      return;
    }

    const sessionPath = sessionClient.projectAgentSessionPath(
      projectId,
      sessionId
    );

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: query,
          languageCode: "en-US",
        },
      },
    };

    console.log("Dialogflow Request:", request);

    const responses = await sessionClient.detectIntent(request);
    console.log("Dialogflow Response:", responses);

    const result = responses[0];
    res.json(result);
  } catch (error) {
    console.error("Error calling Dialogflow:", error);
    res.status(500).send({
      error: "Error processing request",
      message: error.message,
    });
  }
};