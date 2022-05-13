import { NextApiRequest, NextApiResponse } from 'next'
import { setFlashVariable } from '../../lib/getFlashSession'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await setFlashVariable(req, res, 'TOAST')
  res.redirect('/')
}
