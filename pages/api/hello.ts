// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
// you dont have to return html 
// can do request processign here 
// using express defination under the hood
// it a express end point
// webhooks , cache headers 
// access this using
// curl localhost:3000/api/hello
// callout database 
// next runs on servers
// return json, here
// build my application as ton of functions rather than deeply nested objects
// page base routing in the better