import React, { useState } from "react";
import { View } from "react-native";
import InputField from "../../components/InputField/InputField";
import ReasonList from "../ReasonList/ReasonList";

const List = props => {
  const [reasons, setReasons] = useState([]);

  const addReason = reason => {
    const newReasons = reasons;
    newReasons.push(reason);
    setReasons(newReasons);
  };

  return (
    <View>
      <InputField addReason={reason => addReason(reason)} />
      <ReasonList />
    </View>
  );
};

export default List;
