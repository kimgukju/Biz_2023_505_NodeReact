import uuid from "react-uuid";
const sampleBucketList = ["개발자되기", "리액트 정복", "Spring 정복"];

export const bucketLoader = () => {
  /**
   * bucekt 을 key 로 하고  sampleBucektList 를 데이터로 담아서
   * JSON type 데이
   */
  return { bucketList: sampleBucketList };
};

export const bucketAction = () => {
  console.log("action");
  return sampleBucketList.push(uuid());
};
