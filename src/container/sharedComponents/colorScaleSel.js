function colorScaleSel(sel, theme) {
  switch (sel) {
    case 2:
      return {
        lvlu: theme.fill0,
        lvl0: theme.fill3,
      };
    case 3:
      return {
        lvlu: theme.fill0,
        lvl0: theme.fill1,
        lvl1: theme.fill3,
      };
    case 4:
      return {
        lvlu: theme.fill0,
        lvl0: theme.fill1,
        lvl1: theme.fill2,
        lvl2: theme.fill4,
      };
    case 5:
      return {
        lvlu: theme.fill0,
        lvl0: theme.fill1,
        lvl1: theme.fill2,
        lvl2: theme.fill3,
        lvl3: theme.fill4,
      };
    case 6:
      return {
        lvlu: theme.fill0,
        lvl0: theme.fill1,
        lvl1: theme.fill2,
        lvl2: theme.fill3,
        lvl3: theme.fill4,
        lvl4: theme.fill4,
      };
    case 7:
      return {
        lvlu: theme.fill0,
        lvl0: theme.fill0,
        lvl1: theme.fill0,
        lvl2: theme.fill1,
        lvl3: theme.fill2,
        lvl4: theme.fill3,
        lvl5: theme.fill4,
      };
    default:
      return {
        lvlu: theme.fill0,
        lvl0: theme.fill0,
        lvl1: theme.fill0,
        lvl2: theme.fill1,
        lvl3: theme.fill2,
        lvl4: theme.fill3,
        lvl5: theme.fill4,
      };
  }
}

export default colorScaleSel;
