// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();
export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  // Don't send cookei to api server
  req.headers.cookie = '';
  proxy.web(req, res, {
    target: process.env.API_URL,
    changeOrigin: true,
    selfHandleResponse: false, // có nghĩa là khi proxy nhận đc data nó chả ra luôn cho client lên ta k cần  res để trả về cho người dùng nữa
  });
  //   res.status(200).json({ name: 'Nguyễn Đức Duy' });
}
