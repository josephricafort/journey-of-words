function colorScaleSel(sel, theme) {
  switch (sel) {
    case 2:
      return {
        "?": theme.fill0,
        0: theme.fill3,
      };
    case 3:
      return {
        "?": theme.fill0,
        0: theme.fill1,
        1: theme.fill3,
      };
    case 4:
      return {
        "?": theme.fill0,
        0: theme.fill1,
        1: theme.fill2,
        2: theme.fill4,
      };
    case 5:
      return {
        "?": theme.fill0,
        0: theme.fill1,
        1: theme.fill2,
        2: theme.fill3,
        3: theme.fill4,
      };
    case 6:
      return {
        "?": theme.fill0,
        0: theme.fill0,
        1: theme.fill1,
        2: theme.fill2,
        3: theme.fill3,
        4: theme.fill4,
      };
    case 7:
      return {
        "?": theme.fill0,
        0: theme.fill0,
        1: theme.fill0,
        2: theme.fill1,
        3: theme.fill2,
        4: theme.fill3,
        5: theme.fill4,
      };
    default:
      return {
        "?": theme.fill0,
        0: theme.fill0,
        1: theme.fill0,
        2: theme.fill1,
        3: theme.fill2,
        4: theme.fill3,
        5: theme.fill4,
      };
  }
}

export default colorScaleSel;
