import { useState, useEffect } from "react";
import API_KEY from "./Keys";

const CONTEXT_KEY = "e31940be33e3747dd";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {}, [term]);
};

export default useGoogleSearch;
