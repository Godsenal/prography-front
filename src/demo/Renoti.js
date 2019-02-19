import React from "react";
import { createNotifier, NotiPortal } from "renoti";
import { Button } from "../components";

const notifier = createNotifier();

const positions = ["bottom-left", "bottom-center", "bottom-right"];
const types = ["default", "success", "error", "info"];

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const getRandomPos = () => positions[getRandom(0, positions.length - 1)];
const getRandomType = () => types[getRandom(0, types.length - 1)];
const Renoti = () => {
  const notify = () => {
    notifier.notify({
      message: "Random Noti Demo!",
      position: getRandomPos(),
      type: getRandomType()
    });
  };
  return (
    <>
      <Button onClick={notify}>Click Me!</Button>
      <NotiPortal notifier={notifier} />
    </>
  );
};

export default Renoti;
