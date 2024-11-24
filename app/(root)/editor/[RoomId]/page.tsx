"use client";

import React, { useEffect, useRef } from "react";
import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { autocompletion, closeBrackets } from "@codemirror/autocomplete";
import { dracula } from "thememirror";

const Page = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const view = new EditorView({
        extensions: [
          basicSetup,
          javascript(),
          html(),
          autocompletion(),
          closeBrackets(),
          dracula,
        ],
        parent: editorRef.current,
      });

      return () => {
        view.destroy();
      };
    }
  }, []);

  return (
    <div
      ref={editorRef}
      style={{
        position: "relative",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        fontSize: "20px",
        border: "none",
      }}
    />
  );
};

export default Page;
