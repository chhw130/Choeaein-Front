import FindID from "@/component/findPage/findId/FindID";
import React from "react";
import { IdolGroup } from "../page";
import { getIdolGroups } from "@/utils/API/CSRSetting";

const findIDPage = async () => {
  return <FindID />;
};

export default findIDPage;
