"use client";

import React, { useCallback, useState, useRef } from "react";

import { Button } from "~/app/components/components";
import { useAutosizeTextArea } from "./libs/hooks/hooks";
import styles from "./styles.module.css";

const NewThought: React.FC = () => {
  const [thought, setThought] = useState("");

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, thought);

  const handleThoughtChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setThought(event.target.value);
    },
    []
  );

  return (
    <div className={`white-box ${styles["container"]}`}>
      <h1 className={styles["header"]}>NewThought</h1>
      <textarea
        className={styles["thought-textarea"]}
        value={thought}
        onChange={handleThoughtChange}
        placeholder="type out your thought"
        maxLength={280}
        ref={textAreaRef}
      />
      <div className={styles["bottom-container"]}>
        <span className={styles["char-count"]}>{thought.length}/280</span>
        <Button label="publish" />
      </div>
    </div>
  );
};

export { NewThought };
