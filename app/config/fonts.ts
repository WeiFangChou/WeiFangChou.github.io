import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Quicksand as Quicksand,
  Lexend_Deca as LexendDeca,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const lexendDeca = LexendDeca({
  subsets: ["latin"],
  variable: "--font-sans",
});
