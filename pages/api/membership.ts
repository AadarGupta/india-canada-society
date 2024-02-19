// pages/api/membership.ts
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

// This function simulates sending data to an external API or service.
// Replace this with your actual API call logic.
async function sendToExternalApi(formData: FormData): Promise<Response> {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbwhEKiOSOyg3RVPJEYPPEts6Ere5FwwFAFjvcV8VhNQuEB65UUWamTAUco8xbUj6qoOSg/exec",
    {
      method: "POST",
      body: formData,
    }
  );
  return response;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    try {
      const formData = new FormData();
      Object.keys(req.body).forEach((key) => {
        formData.append(key, req.body[key]);
      });

      const response = await sendToExternalApi(formData);
      if (response.ok) {
        res.status(200).json({ message: "Form submitted successfully!" });
      } else {
        res
          .status(500)
          .json({ message: "There was a problem with the form submission." });
      }
    } catch (error) {
      console.error("Submission error:", error);
      res
        .status(500)
        .json({ message: "Failed to submit the form. Please try again." });
    }
  } else {
    // Handle any other HTTP methods
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
