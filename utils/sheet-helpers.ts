import type { GoogleSpreadsheet, GoogleSpreadsheetRow, GoogleSpreadsheetWorksheet } from "google-spreadsheet";
import { SpreadsheetProperties, SheetParams, SheetProperties, SheetStaticData } from "./types";

export const getSpreadsheetProperties = (doc: GoogleSpreadsheet): SpreadsheetProperties => {
  return {
    title: doc.title,
    spreadsheetId: doc.spreadsheetId
  }
};

export const getSheetInstance = ({ doc, key = 0, method = 'sheetsByIndex' }: SheetParams): GoogleSpreadsheetWorksheet => {
  return doc[method][key];
};

export const getSheetProperties = (sheet: GoogleSpreadsheetWorksheet): SheetProperties => {
  return {
    sheetId: sheet.sheetId,
    title: sheet.title,
    index: sheet.index,
    sheetType: sheet.sheetType,
    hidden: sheet.hidden,
    rightToLeft: sheet.rightToLeft,
  }
};

export const getSheetStaticData = async (
  sheet: GoogleSpreadsheetWorksheet,
  rows?: GoogleSpreadsheetRow<Record<string, any>>[]
): Promise<SheetStaticData[]> => {
  const data = rows ? rows : await sheet.getRows();

  // Return as static object values
  return data.map((row, index) => {
    return {
      data: {
        ...row.toObject()
      },
      index: index,
      rowNumber: row.rowNumber
    };
  });
};

export const updateSheetRow = async (sheet: GoogleSpreadsheetWorksheet, index: number, data: object): Promise<SheetStaticData[]> => {
  const rows = await sheet.getRows();

  rows[index].assign({ ...data });
  await rows[index].save();

  return getSheetStaticData(sheet, rows);
};
