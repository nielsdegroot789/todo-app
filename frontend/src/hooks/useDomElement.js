import { useEffect, useState } from "react";

const useDomElement = () => {
  const [domElement, setDomElement] = useState(null);

  useEffect(() => {
    const domElement = document.createElement("div");
    document.body.appendChild(domElement);
    setDomElement(domElement);

    return () => document.body.removeChild(domElement);
  }, []);
  return domElement;
};

export default useDomElement;
