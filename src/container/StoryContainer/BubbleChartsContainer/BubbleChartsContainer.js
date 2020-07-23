import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import * as d3 from "d3";

import BubbleChart from "../../../component/StoryContainer/BubbleChartsContainer/BubbleChart/BubbleChart";
import { DB_GITHUB_WORDS_COUNT_TOP20PC } from "../../../utils/constants";
import styles from "./BubbleChartsContainer.module.scss";

const BubbleChartsContainer = () => {
  const [data, setData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [maxCognacy, setMaxCognacy] = useState(80);
  const [words, setWords] = useState([]);

  useEffect(() => {
    axios.get(DB_GITHUB_WORDS_COUNT_TOP20PC).then((d) => {
      setData(d.data);
      setDataFiltered(d.data.filter((obj) => obj.word === "thin"));
      setMaxCognacy(d3.max(d.data.map((obj) => obj.cognacy1)));
      setWords([...new Set(d.data.map((obj) => obj.word))]);
    });
  }, []);

  return (
    <div className={styles["bubblecharts-container"]}>
      {words.map((w) => {
        return (
          <div className={styles["bubblechart"]}>
            <h3>{w}</h3>
            <BubbleChart
              data={data.filter((d) => d.word == w)}
              maxCognacy={maxCognacy}
              key={w}
            ></BubbleChart>
          </div>
        );
      })}
    </div>
  );
};

export default BubbleChartsContainer;
