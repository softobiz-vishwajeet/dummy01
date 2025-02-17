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


  return (
    <StyleLayout>
      <div className="container-fluid">
        <div className="row">
        hi from vishu
        </div>
      </div>
    </StyleLayout>
  );
}



