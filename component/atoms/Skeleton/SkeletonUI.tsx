import { Tbody, Th, Thead, Tr, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

interface SkeletonUIProps {
  columnLength: Array<any>;
}

const SkeletonUI = ({ columnLength }: SkeletonUIProps) => {
  const dataLength = 10;
  const skeletonData = [];

  for (let i = 0; i <= dataLength; i++) {
    skeletonData.push(
      <Tr key={i}>
        <Th>
          <Skeleton h={40} w={140} />
        </Th>
        {columnLength.map((data, index) =>
          data.Header !== "idol" ? (
            <Th key={index}>
              <SkeletonText />
            </Th>
          ) : null
        )}
      </Tr>
    );
  }

  return <Tbody>{skeletonData}</Tbody>;
};

export default SkeletonUI;
