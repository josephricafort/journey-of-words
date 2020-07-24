import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import * as d3 from "d3";

import BubbleChart from "../../../component/StoryContainer/BubbleChartsContainer/BubbleChart/BubbleChart";
import { DB_GITHUB_WORDS_COUNT_TOP20PC } from "../../../utils/constants";
import styles from "./BubbleChartsContainer.module.scss";

const BubbleChartsContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(DB_GITHUB_WORDS_COUNT_TOP20PC).then((d) => {
      setData(d.data);
    });
  }, []);

  const groups = (d) => {
    return [...new Set(d.map((obj) => obj.group))].sort();
  };

  const words = (d, g) => {
    return [...new Set(d.filter((e) => e.group === g).map((e) => e.word))];
  };

  const dataWords = (w) => {
    return data.filter((e) => e.word === w);
  };

  const maxCognacy = d3.max(data.map((e) => e.cognacy1));

  return (
    <div className={styles["bubblecharts-container"]}>
      {groups(data).map((g) => {
        return (
          <div>
            <h3>{g}</h3>
            <div className={styles["group"]}>
              {words(data, g).map((w) => {
                return (
                  <div className={styles["bubblechart"]}>
                    <h4>{w}</h4>
                    <BubbleChart
                      data={dataWords(w)}
                      maxCognacy={maxCognacy}
                      key={w}
                    ></BubbleChart>
                  </div> // bubblechart
                );
              })}
            </div>
          </div> // group
        );
      })}
    </div> // bubblecharts
  );
};

export default BubbleChartsContainer;
