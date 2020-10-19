import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import * as d3 from "d3";

import BubbleChart from "../../../component/StoryContainer/BubbleChartsContainer/BubbleChart/BubbleChart";
import { DB_GITHUB_WORDS_COUNT_TOP20PC } from "../../../utils/constants";
import styles from "./BubbleChartsContainer.module.scss";

const BubbleChartsContainer = () => {
  const [data, setData] = useState([]);

  // Translating from Top20 to Plus25 data
  // word <- plang_gloss
  // plang_subgroup <- branch_mean (numeric)
  // cognate_gp <- cognate_group (integer)
  // ? <- group

  useEffect(() => {
    axios.get(DB_GITHUB_WORDS_COUNT_TOP20PC).then((d) => {
      setData(d.data);
    });
  }, []);

  const groups = [...new Set(data.map((obj) => obj.group))].sort(); // slice() is for debug purposes only

  // const groups = ["Verbs", "Body Parts"];

  const words = (g) => {
    return [...new Set(data.filter((e) => e.group === g).map((e) => e.word))];
  };

  const dataWords = (w) => {
    return data.filter((e) => e.word === w);
  };

  const dataGroup = (g) => {
    return data.filter((e) => e.group === g);
  };

  const maxCognacy = (d) => {
    return d3.max(d.map((e) => e.cognacy1));
  };

  return (
    <div className={styles["bubblecharts-container"]}>
      {groups.map((g) => {
        return (
          <div>
            <h3>{g}</h3>
            <div className={styles["group"]} key={g}>
              {words(g).map((w) => {
                return (
                  <div className={styles["bubblechart"]}>
                    <h4>{w}</h4>
                    <BubbleChart
                      data={dataWords(w)}
                      maxCognacy={maxCognacy(dataGroup(g))}
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
