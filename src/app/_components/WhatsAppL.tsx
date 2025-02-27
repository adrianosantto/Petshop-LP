"use client";

import Lottie from "lottie-react";
import WhatsApp from "../../../public/WhatsApp.json"; // Caminho do JSON

const WhatsAppL = () => {
  return <Lottie animationData={WhatsApp} loop={true} height={.6} width={.6}/>;
};

export default WhatsAppL;