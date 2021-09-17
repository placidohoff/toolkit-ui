import { Colors } from "./types";

export const baseColors = {
  failure: "#F14646",
  // primary: "#1FC7D4",
  primary: '#00CC9B',
  primaryBright: "#00EDB4",
  primaryDark: "#018D6C",
  secondary: "#00FFC2",
  success: "#00CC9B",
  warning: "#FFB237",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#452a7a",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  // background: "#FAF9FA",
  background:'#000000',
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  backgroundAlt2: "rgba(255, 255, 255, 0.7)",
  cardBorder: "#E7E3EB",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  // text: "#280D5F",
  text: '#00CC9B',
  textDisabled: "#BDC2C4",
  textSubtle: "#018D6C",
  disabled: "#E9EAEB",
  gradients: {
    // bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
    bubblegum: "linear-gradient(73.25deg, #000000 7.24%, #4D4B4B 108.45%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#00EDB4",
  //background: "#08060B",
  background: '#222222',
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#27262c",
  backgroundAlt2: "rgba(39, 38, 44, 0.7)",
  cardBorder: "#383241",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#00CC9B",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#2F2F2F",
  // text: "#F4EEFF",
  text: '#EAE2FC',
  textDisabled: "#666171",
  textSubtle: "#00CC9B",
  disabled: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};