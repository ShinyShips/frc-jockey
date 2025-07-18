/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "@/components/ui/button";
import type { ReactElement } from "react";

/**
 * A component that compiles the selected JSON files into a CSV format required
 * by the analysis software and downloads it to the user's computer.
 *
 * @param {array} selectedFiles - The list of files that have been selected.
 * @param {function} setSelectedFiles - The function to set the list of selected files.
 * @return {ReactElement} The rendered component.
 */
const ParseDataCompileButton = ({ selectedFiles }: { selectedFiles: any[] }): ReactElement => {
  /**
   * Converts the selected JSON files into a CSV format required by the
   * analysis software.
   */
  const convertJSONToCSV = () => {
    console.log(selectedFiles);
    
    const totalFilesData = selectedFiles.map((singleFile) =>
      JSON.parse(singleFile.text)
    );

    const fullCSV = [];
    fullCSV.push(totalFilesData[0][0]);
    for (let fileIndex = 0; fileIndex < totalFilesData.length; fileIndex++) {
      const fileData = totalFilesData[fileIndex];
      for (
        let dataRowIndex = 1;
        dataRowIndex < fileData.length;
        dataRowIndex++
      ) {
        const dataRow = fileData[dataRowIndex];
        fullCSV.push(dataRow);
      }
    }

    downloadCSV(
      fullCSV
        .map((row: (string | number)[]) =>
          row
            .map((item: string | number) =>
              typeof item === "string" ? `"${item.replace(/"/g, '""')}"` : item
            )
            .join(",")
        )
        .join("\n")
    );
  };

  /**
   * Downloads the CSV content to the user's computer.
   * @param {string} csvContent - The CSV content to download.
   * @return {void}
   */
  const downloadCSV = (csvContent: string): void => {
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/csv;charset=utf-8," + encodeURIComponent(csvContent)
    );
    element.setAttribute(
      "download",
      `ManeuverScoutingData-${new Date().toLocaleTimeString()}-Full.csv`
    );

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  return (
    <>
      {/* The button to compile and download the CSV */}
      <Button
        className="flex w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl h-16 items-center justify-center p-4 ~text-2xl/5xl text-center"
        onClick={convertJSONToCSV}
      >
        Compile And Download
      </Button>
    </>
  );
};

export default ParseDataCompileButton;
