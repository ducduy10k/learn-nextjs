// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data =
  | {
      data: any[];
      pagination: any;
    }
  | { name: String };

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'GET') return res.status(404).json({ name: 'Method not supported' });

  const responese = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1&_limit=10');
  const responeseJSON = await responese.json();

  res.status(200).json(responeseJSON);
}
