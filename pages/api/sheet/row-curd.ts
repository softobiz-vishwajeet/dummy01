import type { NextApiRequest, NextApiResponse } from 'next';
import { JWT } from 'google-auth-library';
import { GOOGLE_API_SCOPES } from '@/utils/constants';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import creds from '@/utils/red-cable-391719-5f59af674a1b.json';
import { getSheetInstance, getSheetStaticData, updateSheetRow } from '@/utils/sheet-helpers';

// Initialize Google Auth
const serviceAccountAuth = new JWT({
  email: creds.client_email,
  key: creds.private_key,
  scopes: GOOGLE_API_SCOPES
});

export default async function handlerRowCURD(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID as string, serviceAccountAuth);
    await doc.loadInfo(); // loads document properties and worksheets

    let responseData = {};
    const sheet = getSheetInstance({ doc });

    if (req.method === 'GET') {
      responseData = await getSheetStaticData(sheet);
    } else if (req.method === 'PUT') {
      const body = typeof req.body === 'object' ? req.body : JSON.parse(req.body);

      if (!isNaN(body?.index) && body?.data) {
        responseData = await updateSheetRow(sheet, body.index, body.data);
      } else {
        res.status(400).json({ status: 'error', message: 'index or data is missing' });
        return;
      }
    }

    res.status(200).json({ status: 'success', data: responseData });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
}
