import {
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

const SkeletonUI = () => {
  const dataLength = 10;
  const skeletonData = [];
  for (let i = 0; i <= dataLength; i++) {
    skeletonData.push(
      <Tr key={i}>
        <Th>
          <Skeleton h={40} w={140} />
        </Th>
        <Th>
          <SkeletonText />
        </Th>
        <Th>
          <SkeletonText />
        </Th>
        <Th>
          <SkeletonText />
        </Th>
        <Th>
          <SkeletonText />
        </Th>
      </Tr>
    );
  }

  return <Tbody>{skeletonData}</Tbody>;
};

export default SkeletonUI;
