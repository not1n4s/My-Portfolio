import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "https://esm.sh/react@18.3.1?dev";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client?dev";
import htm from "https://esm.sh/htm@3.1.1";

const html = htm.bind(React.createElement);

export { React, createRoot, html, useEffect, useLayoutEffect, useRef, useState };
