import React from "react";
import Document from "./Document";
import { PDFViewer } from "@react-pdf/renderer";

const Page = function({ form }) {
  console.log("test git slack");
  return (
    <PDFViewer className="fw fh">
      <Document form={form} />
    </PDFViewer>
  );
};

export default Page;
