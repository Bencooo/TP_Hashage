import { createProxyMiddleware } from 'http-proxy-middleware';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = createProxyMiddleware({
  target: 'http://34.163.219.17:3000', 
  changeOrigin: true,
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return new Promise((resolve, reject) => {
    proxy(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      resolve(result);
    });
  });
}
