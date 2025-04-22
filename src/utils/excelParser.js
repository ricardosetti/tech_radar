// src/utils/excelParser.js
import * as XLSX from "xlsx"

export function parseExcel(file, callback) {
  const reader = new FileReader()
  reader.onload = (e) => {
    const data = new Uint8Array(e.target.result)
    const workbook = XLSX.read(data, { type: "array" })
    const firstSheet = workbook.Sheets[workbook.SheetNames[0]]
    const jsonData = XLSX.utils.sheet_to_json(firstSheet)
    callback(jsonData)
  }
  reader.readAsArrayBuffer(file)
}
