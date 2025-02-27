export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        typing: "typing 3s steps(30) 1s forwards", // 타이핑 효과
        blink: "blink 0.75s step-end infinite", // 커서 깜박임 효과
        rainbow: "rainbow 2s infinite linear", // 무지개 색상 변경 효과
        "text-shadow-pop-br": "textShadowPopBr 0.5s ease-out forwards", // 텍스트 그림자 효과
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%": { borderColor: "transparent" },
          "50%": { borderColor: "black" },
        },
        textShadowPopBr: {
          "0%": {
            textShadow:
              "0 0 rgba(85, 85, 85, 0.3), 0 0 rgba(85, 85, 85, 0.3), 0 0 rgba(85, 85, 85, 0.3), 0 0 rgba(85, 85, 85, 0.3)",
            transform: "translateX(0) translateY(0)",
          },
          "100%": {
            textShadow:
              "1px 1px rgba(85, 85, 85, 0.3), 2px 2px rgba(85, 85, 85, 0.3), 3px 3px rgba(85, 85, 85, 0.3), 4px 4px rgba(85, 85, 85, 0.2), 5px 5px rgba(85, 85, 85, 0.2), 6px 6px rgba(85, 85, 85, 0.2), 7px 7px rgba(85, 85, 85, 0.1), 8px 8px rgba(85, 85, 85, 0.1)",
            transform: "translateX(-8px) translateY(-8px)",
          },
        },
        rainbow: {
          // <-- 여기 수정!
          "0%": { color: "red" },
          "18%": { color: "orange" },
          "36%": { color: "green" },
          "54%": { color: "blue" },
          "72%": { color: "indigo" },
          "100%": { color: "violet" },
        },
      },
    },
  },
  plugins: [],
};
