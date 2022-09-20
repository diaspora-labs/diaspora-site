import type { NextApiRequest, NextApiResponse } from "next"

const client = require("@sendgrid/client")
client.setApiKey(process.env.SENDGRID_API_KEY)

const list_id = 4900
const recipient_id = "ZGkrHSypTsudrGkmdpJJ"
const headers = {
  "on-behalf-of":
    "The subuser's username. This header generates the API call as if the subuser account was making the call.",
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const request = {
    url: `/v3/contactdb/lists/${list_id}/recipients/${recipient_id}`,
    method: "POST",
    headers: headers,
  }

  res.status(200).json({ name: "John Doe" })
}
