import { useState, useEffect } from "react";
import { limaDistricts } from "../data/districts.js";

export const useDistricts = () => {
  const [districts, setDistricts] = useState<string[]>([]);
  useEffect(() => {
    setDistricts(limaDistricts);
  }, []);
  return districts;
};
