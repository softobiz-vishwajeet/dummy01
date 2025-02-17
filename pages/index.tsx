import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { GOOGLE_API_SCOPES } from '../utils/constants';
import creds from '@/utils/red-cable-391719-5f59af674a1b.json';
import { getSheetInstance, getSheetStaticData } from '../utils/sheet-helpers';

import StyleLayout from '@/styles/layout/page';
import { actionStore } from '@/redux/action';
import Table from '../@material/Table';
import { useContext, useEffect, useState } from 'react';
import { ContextDispatch, ContextStore } from '@/redux/store';
import CellForm, { CellFormData } from '@/components/sheet/cell-form';

export default function HomePage({ rows, headers }: any) {
  const { tableRows, tableHeaders } = useContext(ContextStore).sheet;
  const dispatch = useContext(ContextDispatch);

  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState<CellFormData>({ data: {}, action: 'add' });

  useEffect(() => {
    if (rows && headers) {
      dispatch({ type: actionStore.UPDATE_SHEET_ROWS, payload: JSON.parse(rows) });
      dispatch({ type: actionStore.UPDATE_SHEET_HEADERS, payload: JSON.parse(headers) });
    }
  }, [dispatch, headers, rows]);

  const handleCellForm = (data: any, key: string, action: string) => {
    if (action === 'edit' && Number(data?.rowNumber)) {
      setOpenForm(true);
      setFormData({ ...data, key, action });
    }
  }

  return (
    <StyleLayout>
      <div className="container-fluid">
        <div className="row">
          <Table bordered responsive hover size="sm" className="table-sheet">
            <thead>
              <tr>
                {tableHeaders?.map((header, index) => {
                  return <th key={JSON.stringify(header + index)}>{header}</th>
                })}
              </tr>
            </thead>

            <tbody>
              {tableRows?.map((row) => {
                return <tr key={row.rowNumber}>
                  {tableHeaders?.map((rowKey, i) => {
                    const key = JSON.stringify(`${row.rowNumber}-${i}`);

                    return (
                      <td
                        key={key}
                        id={`#cell-${key}`}
                        className="text-nowrap px-2"
                        onDoubleClick={() => handleCellForm(row, rowKey, 'edit')}
                      >
                        {row.data[rowKey]}
                      </td>
                    );
                  })}
                </tr>
              })}
            </tbody>
          </Table>

          <CellForm show={openForm} setShow={setOpenForm} formData={formData} />
        </div>
      </div>
    </StyleLayout>
  );
}

// Initialize Google Auth
const serviceAccountAuth = new JWT({
  email: creds.client_email,
  key: creds.private_key,
  scopes: GOOGLE_API_SCOPES
});

export async function getServerSideProps() {
  try {
    const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID as string, serviceAccountAuth);
    await doc.loadInfo(); // loads document properties and worksheets

    const sheet = getSheetInstance({ doc });
    const data = await getSheetStaticData(sheet);

    return {
      props: {
        headers: JSON.stringify(sheet.headerValues),
        rows: JSON.stringify(data, (_, k) => k === undefined ? '' : k)
      }
    }
  } catch (error) {
    // Return if server error
    return { notFound: true };
  }
}
